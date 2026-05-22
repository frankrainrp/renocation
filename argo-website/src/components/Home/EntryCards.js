import Link from 'next/link';
import styles from './EntryCards.module.css';
import ImagePlaceholder from '@/components/ImagePlaceholder/ImagePlaceholder';

const entries = [
  {
    id: 'entry-products',
    title: 'Products',
    titleCn: '产品资源库',
    description: 'Premium material library with global sourcing',
    href: '/products',
    imageId: 'entry-products-cover',
    imageDesc: 'Elegant arrangement of premium marble, wood, and stone material samples on dark background, studio lighting',
  },
  {
    id: 'entry-customization',
    title: 'Customization',
    titleCn: '全屋定制',
    description: 'Systematic whole-house solutions',
    href: '/customization',
    imageId: 'entry-custom-cover',
    imageDesc: 'Modern luxury kitchen with custom cabinetry, warm lighting, and premium finishes, wide angle view',
  },
  {
    id: 'entry-cases',
    title: 'Case Studies',
    titleCn: '案例展示',
    description: 'Real projects, real transformations',
    href: '/cases',
    imageId: 'entry-cases-cover',
    imageDesc: 'Beautiful completed luxury living room interior with warm tones, photographed at golden hour',
  },
];

export default function EntryCards() {
  return (
    <section className={styles.entrySection} id="entry-cards">
      <div className="container">
        <div className={`${styles.sectionHeader} fade-in`}>
          <span className="text-caption">Explore</span>
          <h2 className={styles.sectionTitle}>Discover Our World</h2>
          <p className="text-subtitle">Begin your journey through our collections</p>
          <div className="divider divider--center divider--wide"></div>
        </div>

        <div className={styles.cardsGrid}>
          {entries.map((entry, i) => (
            <Link
              key={entry.id}
              href={entry.href}
              className={`${styles.card} fade-in-scale delay-${i + 1}`}
            >
              <div className={styles.cardImage}>
                <ImagePlaceholder
                  imageId={entry.imageId}
                  alt={entry.title}
                  aspect="3:4"
                  category="scene"
                  size="600x800"
                  description={entry.imageDesc}
                  interactive={true}
                />
                <div className={styles.cardOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardNumber}>0{i + 1}</span>
                <h3 className={styles.cardTitle}>{entry.title}</h3>
                <p className={styles.cardTitleCn}>{entry.titleCn}</p>
                <p className={styles.cardDesc}>{entry.description}</p>
                <span className={styles.cardArrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
