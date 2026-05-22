import styles from './softdecoration.module.css';
import ImagePlaceholder from '@/components/ImagePlaceholder/ImagePlaceholder';
import Link from 'next/link';

export const metadata = {
  title: 'Soft Decoration · Style Museum | ARGO SPACE DESIGN',
  description: 'Explore our curated gallery of interior design styles — from Wabi-Sabi to French elegance, each a complete mood and lifestyle experience.',
};

const designStyles = [
  { id: 'cream', name: 'Cream Style', nameCn: '奶油风', keywords: '柔和 / 温暖 / 奶油色 / 慢生活', imageDesc: 'Soft cream-toned luxury living room with plush furniture, warm lighting, and rounded organic forms, editorial interior photography' },
  { id: 'french', name: 'French Elegance', nameCn: '法式风', keywords: '优雅 / 雕花 / 复古 / 法式电影感', imageDesc: 'Elegant French-style interior with ornate moldings, vintage furniture, warm parisian lighting, romantic atmosphere' },
  { id: 'song-dynasty', name: 'Song Dynasty Aesthetic', nameCn: '宋式美学风', keywords: '东方留白 / 文人气质 / 安静 / 克制', imageDesc: 'Minimalist Chinese Song dynasty inspired interior with white space, ink painting, simple wooden furniture, meditative calm' },
  { id: 'new-chinese', name: 'New Chinese', nameCn: '新中式风', keywords: '现代东方 / 高级木作 / 平衡感', imageDesc: 'Modern Chinese interior blending traditional elements with contemporary design, dark wood and warm tones, balanced composition' },
  { id: 'natural-wood', name: 'Natural Wood', nameCn: '原木风', keywords: '自然 / 木质感 / 治愈', imageDesc: 'Warm natural wood interior with light birch and oak, green plants, sunlight streaming through windows, healing atmosphere' },
  { id: 'modern-minimal', name: 'Modern Minimal', nameCn: '现代简约风', keywords: '极简 / 干净 / 高级灰', imageDesc: 'Ultra-clean modern minimalist interior with monochrome palette, premium gray tones, sleek lines, architectural precision' },
  { id: 'mid-century', name: 'Mid-Century Vintage', nameCn: '中古风', keywords: 'Vintage / 收藏感 / 时间感', imageDesc: 'Mid-century modern interior with iconic vintage furniture pieces, warm retro color palette, collected artistic feel' },
  { id: 'light-luxury', name: 'Light Luxury', nameCn: '轻奢风', keywords: '金属 / 大理石 / 低调奢华', imageDesc: 'Refined light luxury interior with marble accents, brushed brass details, neutral tones with subtle metallic highlights' },
  { id: 'italian-minimal', name: 'Italian Minimalism', nameCn: '意式极简风', keywords: 'Italian Minimalism / 高端 / 克制', imageDesc: 'Sophisticated Italian minimalist interior with premium materials, restrained color palette, architectural furniture pieces' },
  { id: 'wabi-sabi', name: 'Wabi-Sabi', nameCn: '侘寂风', keywords: 'Wabi-Sabi / 自然缺陷 / 宁静', imageDesc: 'Wabi-sabi interior with raw textured walls, imperfect ceramics, natural materials, muted earth tones, meditative tranquility' },
];

export default function SoftDecorationPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <ImagePlaceholder
          imageId="soft-dec-hero"
          alt="Interior design style gallery"
          aspect="full"
          category="scene"
          size="1920x600"
          description="Cinematic wide shot of a luxury lifestyle scene with layered textures, fabrics, designer furniture arrangement, soft warm lighting, editorial photography"
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className="text-caption fade-in">Style Museum</span>
          <h1 className="fade-in delay-1">风格情绪博物馆</h1>
          <p className="text-subtitle fade-in delay-2">
            Not a catalog, but an experience. Each style, a world to inhabit.
          </p>
        </div>
      </section>

      {/* Style Grid */}
      <section className={styles.stylesSection}>
        <div className="container">
          <div className={styles.stylesGrid}>
            {designStyles.map((style, i) => (
              <Link
                key={style.id}
                href={`/products/soft-decoration/${style.id}`}
                className={`${styles.styleCard} fade-in-scale delay-${(i % 5) + 1}`}
              >
                <div className={styles.styleCardImage}>
                  <ImagePlaceholder
                    imageId={`style-${style.id}-cover`}
                    alt={style.name}
                    aspect="3:4"
                    category="scene"
                    size="500x667"
                    description={style.imageDesc}
                    interactive={true}
                  />
                  <div className={styles.styleCardOverlay}></div>
                </div>
                <div className={styles.styleCardContent}>
                  <h3 className={styles.styleCardTitle}>{style.name}</h3>
                  <p className={styles.styleCardTitleCn}>{style.nameCn}</p>
                  <div className={styles.styleCardDivider}></div>
                  <p className={styles.styleCardKeywords}>{style.keywords}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
