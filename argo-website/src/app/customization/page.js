import styles from './customization.module.css';
import ImagePlaceholder from '@/components/ImagePlaceholder/ImagePlaceholder';
import Link from 'next/link';

export const metadata = {
  title: 'Whole House Customization | ARGO SPACE DESIGN · 极屿',
  description: 'Systematic space solutions — from entryway to balcony. Not just cabinets, but a complete living experience.',
};

const systems = [
  { id: 'entryway', name: 'Entryway System', nameCn: '入户玄关系统', items: ['Shoe Cabinet', 'Storage', 'Lighting', 'Display Wall'], imageDesc: 'Luxury modern entryway with custom shoe storage, ambient lighting, and display shelving, warm wood and dark accents' },
  { id: 'living-room', name: 'Living Room System', nameCn: '客厅多功能系统', items: ['TV Wall', 'Storage', 'Hidden System', 'Integrated Design'], imageDesc: 'Expansive modern living room with custom TV wall unit, hidden storage, integrated lighting, minimalist luxury' },
  { id: 'dining', name: 'Dining Social System', nameCn: '客餐厅社交系统', items: ['Island Counter', 'Sideboard', 'Social Flow', 'Open Space'], imageDesc: 'Open-plan dining area with custom island counter and sideboard, warm social atmosphere, premium finishes' },
  { id: 'kitchen', name: 'Full Kitchen System', nameCn: '全功能厨房系统', items: ['Premium Kitchen', 'Storage', 'Hardware', 'Flow Design'], imageDesc: 'High-end custom kitchen with premium cabinetry, sophisticated hardware, stone countertops, professional grade' },
  { id: 'bedroom', name: 'Serene Bedroom System', nameCn: '静谧卧室系统', items: ['Woodwork', 'Lighting', 'Storage', 'Headboard'], imageDesc: 'Tranquil luxury master bedroom with custom wood headboard wall, integrated ambient lighting, serene atmosphere' },
  { id: 'wardrobe', name: 'Walk-in Wardrobe', nameCn: '独立/步入式衣帽间', items: ['Glass Wardrobe', 'Luxury Closet', 'Lighting System'], imageDesc: 'Stunning glass-front walk-in wardrobe with LED lighting, luxury organization system, boutique-like atmosphere' },
  { id: 'study', name: 'Study / Gaming Room', nameCn: '多功能书房/电竞房', items: ['Gaming Setup', 'Office System', 'Storage', 'Ambient Light'], imageDesc: 'Modern study room with custom built-in desk, gaming setup, atmospheric RGB lighting, sophisticated tech aesthetic' },
  { id: 'balcony', name: 'Balcony Utility', nameCn: '阳台家务一体化', items: ['Laundry System', 'Storage', 'Function Integration'], imageDesc: 'Clean organized balcony utility space with custom laundry system, integrated storage, maximized functionality' },
];

export default function CustomizationPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <ImagePlaceholder
          imageId="custom-hero-bg"
          alt="Whole house customization showcase"
          aspect="full"
          category="scene"
          size="1920x700"
          description="Panoramic view of a completely custom-designed luxury apartment, showing living room flowing into dining and kitchen, warm lighting, premium woodwork throughout"
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className="text-caption fade-in">Whole House</span>
          <h1 className="fade-in delay-1">全屋定制</h1>
          <p className={`${styles.heroSub} fade-in delay-2`}>
            Systematic Space Solutions — Not just cabinets, but a complete way of living.
          </p>
          <p className={`${styles.heroSubCn} fade-in delay-3`}>
            &quot;系统化空间解决方案&quot;
          </p>
        </div>
      </section>

      {/* Systems Grid */}
      <section className={styles.systemsSection}>
        <div className="container">
          <div className={styles.systemsGrid}>
            {systems.map((sys, i) => (
              <div key={sys.id} className={`${styles.systemCard} fade-in-scale delay-${(i % 4) + 1}`}>
                <div className={styles.systemImage}>
                  <ImagePlaceholder
                    imageId={`system-${sys.id}-cover`}
                    alt={sys.name}
                    aspect="4:3"
                    category="scene"
                    size="600x450"
                    description={sys.imageDesc}
                    interactive={true}
                  />
                  <div className={styles.systemImageOverlay}></div>
                </div>
                <div className={styles.systemInfo}>
                  <h3 className={styles.systemName}>{sys.name}</h3>
                  <p className={styles.systemNameCn}>{sys.nameCn}</p>
                  <div className={styles.systemDivider}></div>
                  <div className={styles.systemItems}>
                    {sys.items.map(item => (
                      <span key={item} className={styles.systemItem}>{item}</span>
                    ))}
                  </div>
                </div>
                {/* Detail images placeholder - 6 per system */}
                <div className={styles.systemDetailImages} data-system={sys.id}>
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <ImagePlaceholder
                      key={n}
                      imageId={`system-${sys.id}-detail-${n}`}
                      alt={`${sys.name} detail ${n}`}
                      aspect="16:9"
                      category="scene"
                      size="800x450"
                      description={`Detail photo ${n} of ${sys.name} (${sys.nameCn}) showing specific installation and design details`}
                      style={{ display: 'none' }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
