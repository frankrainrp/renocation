import styles from './styledetail.module.css';
import ImagePlaceholder from '@/components/ImagePlaceholder/ImagePlaceholder';
import Link from 'next/link';

const styleData = {
  'cream': { name: 'Cream Style', nameCn: '奶油风', keywords: '柔和 / 温暖 / 奶油色 / 慢生活', moodDesc: 'Dreamy cream-toned living space with soft fabrics, rounded furniture, warm natural light filtering through sheer curtains' },
  'french': { name: 'French Elegance', nameCn: '法式风', keywords: '优雅 / 雕花 / 复古 / 法式电影感', moodDesc: 'Romantic French interior with ornate ceiling moldings, vintage chandelier, parisian apartment with tall windows' },
  'song-dynasty': { name: 'Song Dynasty Aesthetic', nameCn: '宋式美学风', keywords: '东方留白 / 文人气质 / 安静 / 克制', moodDesc: 'Minimalist Song dynasty inspired tea room with ink painting, celadon ceramics, bamboo accents, meditative calm' },
  'new-chinese': { name: 'New Chinese', nameCn: '新中式风', keywords: '现代东方 / 高级木作 / 平衡感', moodDesc: 'Modern Chinese interior with dark rosewood furniture, silk screens, contemporary art, balanced East-meets-West design' },
  'natural-wood': { name: 'Natural Wood', nameCn: '原木风', keywords: '自然 / 木质感 / 治愈', moodDesc: 'Warm Scandinavian-Japanese wood interior with light oak, linen textures, green plants, morning sunlight' },
  'modern-minimal': { name: 'Modern Minimal', nameCn: '现代简约风', keywords: '极简 / 干净 / 高级灰', moodDesc: 'Ultra-clean monochrome living space with gray concrete, hidden storage, single statement piece, architectural light' },
  'mid-century': { name: 'Mid-Century Vintage', nameCn: '中古风', keywords: 'Vintage / 收藏感 / 时间感', moodDesc: 'Curated mid-century living room with Eames lounge chair, teak sideboard, vintage artwork collection, warm amber light' },
  'light-luxury': { name: 'Light Luxury', nameCn: '轻奢风', keywords: '金属 / 大理石 / 低调奢华', moodDesc: 'Refined luxury interior with brushed brass accents, marble coffee table, velvet sofa, subtle metallic details' },
  'italian-minimal': { name: 'Italian Minimalism', nameCn: '意式极简风', keywords: 'Italian Minimalism / 高端 / 克制', moodDesc: 'Sophisticated Italian minimalist interior with Minotti-style furniture, monolithic stone surfaces, restrained luxury' },
  'wabi-sabi': { name: 'Wabi-Sabi', nameCn: '侘寂风', keywords: 'Wabi-Sabi / 自然缺陷 / 宁静', moodDesc: 'Wabi-sabi interior with imperfect plaster walls, handmade ceramics, dried botanicals, muted earth tones, profound tranquility' },
};

export function generateStaticParams() {
  return Object.keys(styleData).map((style) => ({ style }));
}

export function generateMetadata({ params }) {
  const data = styleData[params.style] || {};
  return {
    title: `${data.name} | ARGO SPACE DESIGN`,
    description: `Explore ${data.name} (${data.nameCn}) interior design style. ${data.keywords}`,
  };
}

export default function StyleDetailPage({ params }) {
  const data = styleData[params.style];
  if (!data) return <div className={styles.notFound}>Style not found</div>;

  const imageCategories = [
    { label: 'Full Room', count: 4, aspect: '16:9', desc: `Full room interior shot in ${data.name} style, different angle` },
    { label: 'Furniture', count: 3, aspect: '1:1', desc: `Designer furniture piece characteristic of ${data.name} style` },
    { label: 'Detail', count: 2, aspect: '4:3', desc: `Close-up detail shot showing material and texture in ${data.name} style` },
    { label: 'Mood', count: 1, aspect: '3:2', desc: `Lifestyle mood photo capturing the essence of ${data.name} living` },
  ];

  return (
    <div className={styles.page}>
      {/* Full-screen Mood Hero */}
      <section className={styles.hero}>
        <ImagePlaceholder
          imageId={`style-${params.style}-mood-hero`}
          alt={`${data.name} interior`}
          aspect="full"
          category="scene"
          size="1920x1080"
          description={data.moodDesc}
          priority={true}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className="fade-in">{data.name}</h1>
          <p className={`${styles.heroCn} fade-in delay-1`}>{data.nameCn}</p>
          <div className={`${styles.heroDivider} fade-in delay-2`}></div>
          <p className={`${styles.heroKeywords} fade-in delay-3`}>{data.keywords}</p>
        </div>
      </section>

      {/* Image Gallery Sections */}
      <div className="container">
        {imageCategories.map((cat) => (
          <section key={cat.label} className={styles.gallerySection}>
            <h3 className={`${styles.gallerySectionTitle} fade-in`}>{cat.label}</h3>
            <div className={styles.galleryGrid} style={{
              gridTemplateColumns: cat.count >= 3 ? 'repeat(auto-fill, minmax(300px, 1fr))' : 'repeat(2, 1fr)'
            }}>
              {Array.from({ length: cat.count }, (_, n) => (
                <div key={n} className={`${styles.galleryItem} fade-in-scale delay-${n + 1}`}>
                  <ImagePlaceholder
                    imageId={`style-${params.style}-${cat.label.toLowerCase()}-${n + 1}`}
                    alt={`${data.name} ${cat.label} ${n + 1}`}
                    aspect={cat.aspect}
                    category="scene"
                    size="800x600"
                    description={`${cat.desc} ${n + 1}, high quality editorial interior photography`}
                    interactive={true}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Color Palette placeholder */}
        <section className={`${styles.paletteSection} fade-in`}>
          <h3 className={styles.gallerySectionTitle}>Color Palette</h3>
          <ImagePlaceholder
            imageId={`style-${params.style}-palette`}
            alt={`${data.name} color palette`}
            aspect="hero"
            category="ui"
            size="1200x500"
            description={`Elegant color palette swatch card for ${data.name} style, showing 5-6 harmonious colors with color codes, dark background, premium graphic design`}
          />
        </section>

        {/* Back Link */}
        <div className={styles.backLink}>
          <Link href="/products/soft-decoration" className="btn btn--outline">
            ← Back to Style Museum
          </Link>
        </div>
      </div>
    </div>
  );
}
