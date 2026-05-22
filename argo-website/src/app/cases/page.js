import styles from './cases.module.css';
import ImagePlaceholder from '@/components/ImagePlaceholder/ImagePlaceholder';

export const metadata = {
  title: 'Case Studies | ARGO SPACE DESIGN · 极屿',
  description: 'Real projects, real transformations. Explore our portfolio of HDB, Condo, and Landed House interior design projects.',
};

const caseCategories = [
  {
    id: 'hdb',
    label: 'HDB',
    cases: [
      { id: 'hdb-001', title: 'Serenity in Simplicity', style: 'Modern Minimal', area: '95 sqm', imageDesc: 'Completed modern minimalist HDB interior, clean lines, warm lighting, open living space' },
      { id: 'hdb-002', title: 'Warm Timber Haven', style: 'Natural Wood', area: '110 sqm', imageDesc: 'Natural wood themed HDB renovation, light oak throughout, cozy warm atmosphere' },
      { id: 'hdb-003', title: 'Oriental Harmony', style: 'New Chinese', area: '105 sqm', imageDesc: 'New Chinese style HDB interior, dark wood accents with modern furniture, balanced composition' },
    ],
  },
  {
    id: 'condo',
    label: 'Condo',
    cases: [
      { id: 'condo-001', title: 'Skyline Elegance', style: 'Italian Minimal', area: '130 sqm', imageDesc: 'Italian minimalist condo with floor-to-ceiling windows, city skyline view, premium finishes' },
      { id: 'condo-002', title: 'Cream Dream', style: 'Cream Style', area: '120 sqm', imageDesc: 'Cream-toned luxury condo living room with soft textures, rounded furniture, warm glow' },
      { id: 'condo-003', title: 'Parisian Whisper', style: 'French', area: '145 sqm', imageDesc: 'French style condo interior with elegant moldings, vintage-modern furniture mix, romantic lighting' },
    ],
  },
  {
    id: 'landed',
    label: 'Landed House',
    cases: [
      { id: 'landed-001', title: 'The Grand Voyage', style: 'Light Luxury', area: '280 sqm', imageDesc: 'Luxurious landed house interior with double height ceiling, marble features, dramatic chandelier' },
      { id: 'landed-002', title: 'Zen Sanctuary', style: 'Wabi-Sabi', area: '220 sqm', imageDesc: 'Wabi-sabi landed house with raw textured walls, garden courtyard view, natural materials, serene' },
    ],
  },
];

export default function CasesPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <ImagePlaceholder
          imageId="cases-hero-bg"
          alt="Interior design portfolio"
          aspect="full"
          category="case"
          size="1920x700"
          description="Dramatic wide-angle shot of a stunning completed luxury interior space, golden hour lighting streaming through windows, architectural photography"
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className="text-caption fade-in">Portfolio</span>
          <h1 className="fade-in delay-1">Case Studies</h1>
          <p className="text-subtitle fade-in delay-2">
            Real projects. Real transformations. Real living.
          </p>
        </div>
      </section>

      {/* Cases by Category */}
      <div className="container">
        {caseCategories.map((cat) => (
          <section key={cat.id} className={styles.categorySection} id={`cases-${cat.id}`}>
            <div className={`${styles.categoryHeader} fade-in`}>
              <h2 className={styles.categoryTitle}>{cat.label}</h2>
              <div className="divider"></div>
            </div>

            <div className={styles.casesGrid}>
              {cat.cases.map((c, i) => (
                <div key={c.id} className={`${styles.caseCard} fade-in-scale delay-${i + 1}`}>
                  <div className={styles.caseImage}>
                    <ImagePlaceholder
                      imageId={`case-${c.id}-cover`}
                      alt={c.title}
                      aspect="16:9"
                      category="case"
                      size="800x450"
                      description={c.imageDesc}
                      interactive={true}
                    />
                    <div className={styles.caseImageOverlay}></div>
                  </div>
                  <div className={styles.caseInfo}>
                    <h3 className={styles.caseTitle}>{c.title}</h3>
                    <div className={styles.caseMeta}>
                      <span>{c.style}</span>
                      <span>·</span>
                      <span>{c.area}</span>
                    </div>
                  </div>
                  {/* Gallery images placeholder (hidden, for future) */}
                  <div style={{ display: 'none' }}>
                    {Array.from({ length: 10 }, (_, n) => (
                      <ImagePlaceholder
                        key={n}
                        imageId={`case-${c.id}-gallery-${n + 1}`}
                        alt={`${c.title} gallery ${n + 1}`}
                        aspect="16:9"
                        category="case"
                        size="1200x675"
                        description={`Gallery photo ${n + 1} for case study "${c.title}" (${c.style} style), showing different angles and rooms of the completed project`}
                      />
                    ))}
                    {/* Before/After */}
                    <ImagePlaceholder
                      imageId={`case-${c.id}-before`}
                      alt={`${c.title} before renovation`}
                      aspect="16:9" category="case" size="800x450"
                      description={`Before renovation photo of the ${c.title} project, showing original condition`}
                    />
                    <ImagePlaceholder
                      imageId={`case-${c.id}-after`}
                      alt={`${c.title} after renovation`}
                      aspect="16:9" category="case" size="800x450"
                      description={`After renovation photo of the ${c.title} project, showing completed transformation`}
                    />
                    {/* Floor Plan */}
                    <ImagePlaceholder
                      imageId={`case-${c.id}-plan`}
                      alt={`${c.title} floor plan`}
                      aspect="4:3" category="case" size="800x600"
                      description={`Architectural floor plan drawing for the ${c.title} project, professional CAD style`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
