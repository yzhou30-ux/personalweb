'use client';

import { useEffect, useRef } from 'react';

// ─── Inline simplex noise (2D) ───
function createNoise() {
  const grad3 = [
    [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
    [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
    [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1],
  ];
  const perm = new Uint8Array(512);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

  function dot2(g, x, y) { return g[0] * x + g[1] * y; }

  return function noise2D(xin, yin) {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const x0 = xin - (i - t), y0 = yin - (j - t);
    const i1 = x0 > y0 ? 1 : 0, j1 = x0 > y0 ? 0 : 1;
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;
    const gi0 = perm[ii + perm[jj]] % 12;
    const gi1 = perm[ii + i1 + perm[jj + j1]] % 12;
    const gi2 = perm[ii + 1 + perm[jj + 1]] % 12;
    let n0 = 0, n1 = 0, n2 = 0;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) { t0 *= t0; n0 = t0 * t0 * dot2(grad3[gi0], x0, y0); }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) { t1 *= t1; n1 = t1 * t1 * dot2(grad3[gi1], x1, y1); }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) { t2 *= t2; n2 = t2 * t2 * dot2(grad3[gi2], x2, y2); }
    return 70 * (n0 + n1 + n2);
  };
}

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const noise = createNoise();

    const COLORS = [
      { r: 245, g: 166, b: 35  },  // orange
      { r: 242, g: 139, b: 109 },  // coral
      { r: 255, g: 195, b: 150 },  // blush
      { r: 255, g: 218, b: 181 },  // peach
      { r: 200, g: 150, b: 200 },  // lilac (sparse)
    ];

    let W, H;
    let time = 0;
    let frame = 0;
    let animationId;
    const mouse = { x: -9999, y: -9999, active: false };

    class V2 {
      constructor(x = 0, y = 0) { this.x = x; this.y = y; }
      add(v) { this.x += v.x; this.y += v.y; }
      reset(x, y) { this.x = x; this.y = y; }
    }

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();

    class Particle {
      constructor() {
        this.position = new V2();
        this.velocity = new V2();
        this.acceleration = new V2();
        this.alpha = 0;
        this.color = null;
        this.points = [new V2(), new V2(), new V2()];
        this.fadeRate = 0;
        this.noiseOffset = Math.random() * 1000;
        this.orbitDir = Math.random() > 0.5 ? 1 : -1;
        this.spawn();
      }

      spawn() {
        const ox = W * 0.15, oy = H * 0.15;
        const angle = Math.random() * Math.PI * 2;
        const maxDist = Math.max(W, H) * 0.65;
        const dist = Math.pow(Math.random(), 0.65) * maxDist;

        this.position.reset(
          ox + Math.cos(angle) * dist,
          oy + Math.sin(angle) * dist * 0.7
        );

        const d = Math.sqrt((this.position.x - ox) ** 2 + (this.position.y - oy) ** 2);
        const dr = Math.min(d / maxDist, 1);

        if (dr < 0.25) {
          this.color = Math.random() < 0.75 ? COLORS[0] : COLORS[1];
        } else if (dr < 0.5) {
          const r = Math.random();
          this.color = r < 0.4 ? COLORS[1] : r < 0.75 ? COLORS[2] : COLORS[3];
        } else {
          const r = Math.random();
          this.color = r < 0.4 ? COLORS[3] : r < 0.7 ? COLORS[2] : COLORS[4];
        }

        const scale = 1 - dr * 0.6;
        for (let i = 0; i < 3; i++) {
          this.points[i].reset(
            (-8 + Math.random() * 16) * scale,
            (-8 + Math.random() * 16) * scale
          );
        }

        this.targetAlpha = (0.4 + Math.random() * 0.5) * (1 - dr * 0.7);
        this.alpha = 0;
        this.fadeInRate = 0.006 + Math.random() * 0.006;
        // Half the original fadeRate → particles live ~2× longer
        this.fadeRate = 0.0005 + Math.random() * 0.0015 + dr * 0.001;
        this.velocity.reset(0, 0);
        this.acceleration.reset(0, 0);
      }

      follow() {
        const ox = W * 0.15, oy = H * 0.15;
        const dx = this.position.x - ox;
        const dy = this.position.y - oy;
        const n = noise(
          this.position.x * 0.002 + this.noiseOffset + time * 0.02,
          this.position.y * 0.002 + time * 0.015
        );
        const baseAngle = Math.atan2(dy, dx) + Math.PI * 0.5 * this.orbitDir;
        const angle = baseAngle * 0.08 + n * Math.PI * 2.0;
        this.acceleration.x += Math.cos(angle) * 0.03;
        this.acceleration.y += Math.sin(angle) * 0.03;
      }

      update() {
        this.follow();

        // Pull back toward origin area when drifting too far
        const ox = W * 0.15, oy = H * 0.15;
        const homeX = this.position.x - ox;
        const homeY = this.position.y - oy;
        const homeDist = Math.sqrt(homeX * homeX + homeY * homeY);
        const maxRange = Math.max(W, H) * 0.6;
        if (homeDist > maxRange * 0.7) {
          const pullStrength = 0.0008 * ((homeDist - maxRange * 0.7) / maxRange);
          this.acceleration.x -= (homeX / homeDist) * pullStrength;
          this.acceleration.y -= (homeY / homeDist) * pullStrength;
        }

        this.velocity.add(this.acceleration);

        const spd = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
        if (spd > 0.5) {
          this.velocity.x = (this.velocity.x / spd) * 0.5;
          this.velocity.y = (this.velocity.y / spd) * 0.5;
        }
        this.velocity.x *= 0.92;
        this.velocity.y *= 0.92;
        this.position.add(this.velocity);
        this.acceleration.reset(0, 0);

        // Fade in until target, then fade out
        if (this.alpha < this.targetAlpha) {
          this.alpha = Math.min(this.alpha + this.fadeInRate, this.targetAlpha);
        } else {
          this.alpha -= this.fadeRate;
        }

        if (mouse.active) {
          const dx = this.position.x - mouse.x;
          const dy = this.position.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = ((120 - dist) / 120) ** 2 * 0.8;
            this.velocity.x += (dx / dist) * force;
            this.velocity.y += (dy / dist) * force;
          }
        }

        if (
          this.alpha <= 0 ||
          this.position.x < -50 || this.position.x > W + 50 ||
          this.position.y < -50 || this.position.y > H + 50
        ) {
          this.spawn();
        }
      }

      draw() {
        if (this.alpha <= 0) return;
        const { x, y } = this.position;
        const c = this.color;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = `rgb(${c.r},${c.g},${c.b})`;
        ctx.beginPath();
        ctx.moveTo(x + this.points[0].x, y + this.points[0].y);
        ctx.lineTo(x + this.points[1].x, y + this.points[1].y);
        ctx.lineTo(x + this.points[2].x, y + this.points[2].y);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }


    function drawBgGradient() {
      const ox = W * 0.15, oy = H * 0.15;
      const grad = ctx.createRadialGradient(ox, oy, 0, W * 0.5, H * 0.5, W * 0.8);
      grad.addColorStop(0, 'rgba(245, 166, 35, 0.06)');
      grad.addColorStop(0.3, 'rgba(245, 180, 80, 0.03)');
      grad.addColorStop(0.6, 'rgba(242, 139, 109, 0.015)');
      grad.addColorStop(1, 'rgba(250, 247, 242, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }

    const PARTICLE_COUNT = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 1200), 1800);
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    const handleMouse = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; };
    const handleMouseLeave = () => { mouse.active = false; };
    canvas.addEventListener('mousemove', handleMouse);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Start transparent — let the CSS background image show through
    drawBgGradient();

    function animate() {
      time += 0.016;
      frame++;

      ctx.clearRect(0, 0, W, H);

      if (frame % 120 === 0) drawBgGradient();

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      resize();
      drawBgGradient();
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouse);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[2]"
      style={{ pointerEvents: 'auto' }}
    />
  );
}
