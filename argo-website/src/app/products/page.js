import styles from './products.module.css';
import ImagePlaceholder from '@/components/ImagePlaceholder/ImagePlaceholder';
import Link from 'next/link';

export const metadata = {
  title: 'Products | ARGO SPACE DESIGN · 极屿',
  description: 'Explore our premium material library — from Italian marble to artisan tiles, sintered stone, and luxury wood. Global sourcing, factory direct.',
};

const categories = [
  {
    id: 'hard-material',
    title: 'Hard Material',
    titleCn: '硬装材料',
    description: 'Premium tiles, marble, sintered stone, and WPC sourced from the world\'s finest quarries and factories.',
    href: '/products/hard-material',
    imageId: 'prod-hard-cover',
    imageDesc: 'Elegant display of premium marble and stone slabs leaning against a dark wall, dramatic studio lighting with golden highlights',
    items: ['Tile', 'Marble', 'Sintered Stone', 'WPC'],
  },
  {
    id: 'soft-decoration',
    title: 'Soft Decoration',
    titleCn: '软装风格',
    description: 'A curated gallery of interior styles — from serene Wabi-Sabi to opulent French elegance.',
    href: '/products/soft-decoration',
    imageId: 'prod-soft-cover',
    imageDesc: 'Beautiful luxury living room interior with soft warm lighting, designer furniture, layered textures and fabrics, editorial photography style',
    items: ['Cream', 'French', 'Song Dynasty', 'New Chinese', 'Natural Wood', 'Modern Minimal', 'Mid-Century', 'Light Luxury', 'Italian Minimal', 'Wabi-Sabi'],
  },
];

export default function ProductsPage() {
  return (
    <div className={styles.productsPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <ImagePlaceholder
          imageId="prod-hero-bg"
          alt="Premium material showcase"
          aspect="full"
          category="product"
          size="1920x800"
          description="Panoramic view of luxury material showroom with marble slabs, wood panels, and stone samples arranged artistically, warm ambient lighting, dark sophisticated atmosphere"
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className="text-caption fade-in">Material Library</span>
          <h1 className={`${styles.heroTitle} fade-in delay-1`}>Products</h1>
          <p className={`${styles.heroSubtitle} fade-in delay-2`}>
            A curated collection of the world&apos;s finest materials, sourced directly for your vision.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className="container">
          {categories.map((cat, i) => (
            <div key={cat.id} className={`${styles.categoryBlock} fade-in`}>
              <div className={styles.categoryImage}>
                <ImagePlaceholder
                  imageId={cat.imageId}
                  alt={cat.title}
                  aspect="3:2"
                  category="product"
                  size="800x533"
                  description={cat.imageDesc}
                  interactive={true}
                />
              </div>
              <div className={styles.categoryInfo}>
                <span className={styles.categoryNumber}>0{i + 1}</span>
                <h2 className={styles.categoryTitle}>{cat.title}</h2>
                <p className={styles.categoryTitleCn}>{cat.titleCn}</p>
                <div className="divider"></div>
                <p className={styles.categoryDesc}>{cat.description}</p>
                <div className={styles.categoryItems}>
                  {cat.items.map(item => (
                    <span key={item} className={styles.categoryTag}>{item}</span>
                  ))}
                </div>
                <Link href={cat.href} className="btn btn--outline">
                  Explore Collection →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
