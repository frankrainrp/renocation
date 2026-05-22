import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import AIAssistant from '@/components/AIAssistant/AIAssistant';
import GrainOverlay from '@/components/GrainOverlay/GrainOverlay';
import ScrollAnimator from '@/components/ScrollAnimator/ScrollAnimator';

export const metadata = {
  title: 'ARGO SPACE DESIGN · 极屿 | Luxury Interior Design',
  description: 'ARGO SPACE DESIGN (极屿) — A luxury interior design studio bridging global aesthetics and premium craftsmanship. From material sourcing to whole-house customization, we craft your ideal living space.',
  keywords: 'luxury interior design, Singapore, whole house customization, premium materials, ARGO SPACE DESIGN, 极屿',
  openGraph: {
    title: 'ARGO SPACE DESIGN · 极屿',
    description: 'Every great home begins with a voyage.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AIAssistant />
        <ScrollAnimator />
      </body>
    </html>
  );
}
