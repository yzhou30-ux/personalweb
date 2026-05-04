import './globals.css';

export const metadata = {
  title: 'Yewen — Design · Illustration · Exploration',
  description:
    'Portfolio of Yewen — industrial designer, illustrator, and creative technologist exploring the intersection of physical and digital craft.',
  openGraph: {
    title: 'Yewen — Design · Illustration · Exploration',
    description: 'Industrial design, illustration, and creative exploration.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* subtle grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
