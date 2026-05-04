'use client';

import { useRef } from 'react';

export default function VideoLoop({ src, className, style }) {
  const containerRef = useRef(null);
  const video2Ref = useRef(null);

  function handleMetadata(e) {
    const dur = e.target.duration;
    if (!isFinite(dur) || dur === 0) return;
    // Propagate real duration to both animations via CSS custom property
    containerRef.current?.style.setProperty('--duration', `${dur}s`);
    // Offset second video by half a cycle so seams never overlap
    if (video2Ref.current) video2Ref.current.currentTime = dur / 2;
  }

  return (
    <div ref={containerRef} className={className} style={style}>
      <video
        autoPlay muted loop playsInline
        onLoadedMetadata={handleMetadata}
        src={src}
        className="loop-a absolute inset-0 w-full h-full object-cover"
      />
      <video
        ref={video2Ref}
        autoPlay muted loop playsInline
        src={src}
        className="loop-b absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
