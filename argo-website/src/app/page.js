import styles from './page.module.css';
import HeroSection from '@/components/Home/HeroSection';
import ChapterSection from '@/components/Home/ChapterSection';
import EntryCards from '@/components/Home/EntryCards';

export default function Home() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      
      {/* Brand Story Chapters */}
      <ChapterSection
        number="01"
        titleEn="The Origin"
        titleCn={'\u7f18\u8d77 \u00b7 \u4e00\u573a\u5173\u4e8e\u201c\u6781\u81f4\u201d\u7684\u8fdc\u5f81'}
        images={[
          { id: 'ch1-bg', alt: 'Argo ship sailing dark golden seas', aspect: 'full', size: '1920x1080', category: 'brand', description: 'Dark cinematic scene of the Argo ship navigating through black-gold waters under starlight, ancient Greek mythology style' },
          { id: 'ch1-ship', alt: 'Ancient Argo vessel detail', aspect: '3:4', size: '600x800', category: 'brand', description: 'Close-up of ancient wooden ship hull with golden details, parchment texture overlay', src: '/images/ch1-ship.jpg' },
          { id: 'ch1-sculpture', alt: 'Greek sculpture in golden light', aspect: '3:4', size: '600x800', category: 'brand', description: 'Classical Greek marble sculpture bathed in warm golden candlelight, museum-quality photography', src: '/images/ch1-sculpture.jpg' },
          { id: 'ch1-star', alt: 'Ancient star chart navigation', aspect: '16:9', size: '1200x675', category: 'brand', description: 'Antique celestial navigation map with golden lines on dark parchment, constellation patterns', src: '/images/ch1-star.jpg' },
        ]}
        paragraphs={[
          'In ancient Greek mythology, the Argo carried heroes across treacherous seas in search of the Golden Fleece — the ultimate prize.',
          'Today, finding your ideal home is its own voyage. Navigating complex supply chains, bridging aesthetic barriers, sourcing the finest materials across continents.',
          'ARGO SPACE DESIGN is your modern expedition — we voyage across oceans to bring the Golden Fleece of interior design to your doorstep.',
        ]}
        alignment="left"
      />

      <ChapterSection
        number="02"
        titleEn="The Strength"
        titleCn={'\u5b9e\u529b \u00b7 \u6211\u4eec\u7684\u201c\u963f\u5c14\u6208\u82f1\u96c4\u56e2\u201d'}
        images={[
          { id: 'ch2-bg', alt: 'Global material sourcing', aspect: 'full', size: '1920x1080', category: 'brand', description: 'Cinematic aerial view of premium material warehouse with warm lighting, marble slabs and wood panels arranged artistically', src: '/images/ch2-bg.jpg' },
          { id: 'ch2-material-1', alt: 'Premium marble texture', aspect: '1:1', size: '600x600', category: 'texture', description: 'Close-up of Italian white marble with subtle golden veining, studio lighting' },
          { id: 'ch2-material-2', alt: 'Luxury wood grain', aspect: '1:1', size: '600x600', category: 'texture', description: 'Rich walnut wood grain macro photography, warm brown tones with natural patterns' },
          { id: 'ch2-material-3', alt: 'Artisan stone surface', aspect: '1:1', size: '600x600', category: 'texture', description: 'Sintered stone surface close-up showing sophisticated texture, cool gray tones' },
          { id: 'ch2-factory', alt: 'Modern production facility', aspect: '16:9', size: '1200x675', category: 'brand', description: 'High-end furniture factory with CNC machines and craftsmen at work, warm industrial lighting' },
          { id: 'ch2-design', alt: 'Design studio workspace', aspect: '16:9', size: '1200x675', category: 'brand', description: 'Elegant design studio with material samples, blueprints, and mood boards spread across a large table' },
        ]}
        paragraphs={[
          'Our team embodies the spirit of the Argonauts — elite designers with international vision and Chinese aesthetic refinement.',
          'We source directly from the world\'s finest quarries and factories. No middlemen. No markups. Just pure, unadulterated quality delivered to Singapore.',
          'We are not an ordinary renovation company. We are a design brand with global resource integration capabilities.',
        ]}
        highlights={[
          { icon: 'eye', label: 'World-Class Design Vision' },
          { icon: 'globe', label: 'Global Supply Chain' },
          { icon: 'factory', label: 'Factory Direct Pricing' },
          { icon: 'handshake', label: 'End-to-End Service' },
        ]}
        alignment="right"
      />

      <ChapterSection
        number="03"
        titleEn="The Promise"
        titleCn={'\u627f\u8bfa \u00b7 \u5b88\u62a4\u60a8\u7684\u201c\u91d1\u7f8a\u6bdb\u201d'}
        images={[
          { id: 'ch3-bg', alt: 'Lighthouse guiding through storm', aspect: 'full', size: '1920x1080', category: 'brand', description: 'Dramatic lighthouse beam cutting through stormy dark seas, golden light piercing darkness, cinematic photography' },
          { id: 'ch3-lighthouse', alt: 'Beacon of trust', aspect: '3:4', size: '600x800', category: 'brand', description: 'Close-up of lighthouse lantern with warm golden glow against deep blue night sky' },
          { id: 'ch3-home', alt: 'Warm luxury interior', aspect: '16:9', size: '1200x675', category: 'scene', description: 'Warm luxury living room interior with soft lighting, premium furniture, and a sense of home and comfort' },
        ]}
        paragraphs={[
          'Like a lighthouse guiding ships through storms, we navigate the complexities of renovation so you don\'t have to.',
          'From concept to completion, from material selection to final installation — we are your trusted companion through every step.',
          'Your dream home is our greatest honor to protect and deliver.',
        ]}
        alignment="center"
      />

      <ChapterSection
        number="04"
        titleEn="The Destination"
        titleCn="结局 · 您的理想，我们的荣耀"
        images={[
          { id: 'ch4-bg', alt: 'Dawn breaking over island paradise', aspect: 'full', size: '1920x1080', category: 'brand', description: 'Golden sunrise over a serene island landscape, warm light flooding through clouds, sense of arrival and achievement' },
          { id: 'ch4-space-1', alt: 'Completed luxury living space', aspect: '16:9', size: '1200x675', category: 'scene', description: 'Stunning completed luxury apartment interior, warm lighting, premium materials, contemporary design' },
          { id: 'ch4-space-2', alt: 'Serene bedroom sanctuary', aspect: '16:9', size: '1200x675', category: 'scene', description: 'Peaceful luxury master bedroom with soft lighting, high-end bedding, and minimalist wood accents' },
        ]}
        paragraphs={[
          'The voyage ends where your dream begins.',
          'Every space we create is not just a room — it is a destination you\'ve been searching for.',
        ]}
        closingQuote="让高级定制回归本真源头。"
        ctas={[
          { label: 'Explore Our Materials', href: '/products' },
          { label: 'Begin Your Project', href: '/contact' },
          { label: 'Contact Us', href: '/contact' },
        ]}
        alignment="center"
        isLast={true}
      />

      {/* Entry Cards to other sections */}
      <EntryCards />
    </div>
  );
}
