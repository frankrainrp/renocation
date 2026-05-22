import styles from './hardmaterial.module.css';
import ImagePlaceholder from '@/components/ImagePlaceholder/ImagePlaceholder';

export const metadata = {
  title: 'Hard Material | ARGO SPACE DESIGN',
  description: 'Premium tiles, marble, sintered stone, and WPC — sourced directly from the world\'s finest quarries.',
};

const materials = [
  {
    category: 'Tile',
    categoryCn: '瓷砖',
    items: [
      { id: 'tile-mold-print', name: 'Mold Print Tile', nameCn: '模具打印砖', imageDesc: 'Premium mold print tile with intricate pattern, warm neutral tones, close-up texture shot' },
      { id: 'tile-soft-clay', name: 'Soft Clay Tile', nameCn: '软瓷', imageDesc: 'Soft clay tile with organic natural texture, earthy brown tones, artisan quality' },
      { id: 'tile-soft-mold', name: 'Soft Clay Mold Tile', nameCn: '软瓷模具砖', imageDesc: 'Soft clay mold tile with dimensional pattern, warm stone color palette' },
      { id: 'tile-travertine', name: 'Travertine Print', nameCn: '洞石打印', imageDesc: 'Travertine print tile showing natural stone holes and veining, warm cream and beige' },
    ],
  },
  {
    category: 'Marble',
    categoryCn: '大理石',
    items: [
      { id: 'marble-calacatta', name: 'Calacatta Gold', nameCn: '卡拉卡塔金', imageDesc: 'Luxurious Calacatta Gold marble slab with bold golden veining on white base, full slab view' },
      { id: 'marble-statuario', name: 'Statuario', nameCn: '雪花白', imageDesc: 'Pure white Statuario marble with subtle gray veining, polished surface, studio lighting' },
      { id: 'marble-emperador', name: 'Emperador Dark', nameCn: '深啡网', imageDesc: 'Rich dark brown Emperador marble with lighter veining patterns, warm luxurious feel' },
      { id: 'marble-nero', name: 'Nero Marquina', nameCn: '黑金花', imageDesc: 'Dramatic black Nero Marquina marble with white veining, high contrast, elegant' },
    ],
  },
  {
    category: 'Sintered Stone',
    categoryCn: '岩板',
    items: [
      { id: 'sintered-art-brick', name: 'Art Brick', nameCn: '网红艺术小砖', imageDesc: 'Trendy artisan small brick tile in modern geometric pattern, matte finish, contemporary design' },
      { id: 'sintered-hex', name: 'Hexagonal', nameCn: '六角砖', imageDesc: 'Modern hexagonal sintered stone tiles in mixed tones, geometric pattern arrangement' },
      { id: 'sintered-stair', name: 'Stair Tile', nameCn: '楼梯砖', imageDesc: 'Premium sintered stone stair tile showing elegant step transition detail' },
      { id: 'sintered-wood', name: 'Wood Grain', nameCn: '木纹砖', imageDesc: 'Wood grain sintered stone tile with realistic natural wood pattern, warm brown tones' },
      { id: 'sintered-limestone', name: 'Matte Limestone', nameCn: '哑光莱姆石', imageDesc: 'Matte limestone sintered stone with subtle natural texture, soft gray palette' },
      { id: 'sintered-herringbone', name: 'Herringbone', nameCn: '质感鱼骨砖', imageDesc: 'Textured herringbone sintered stone tile pattern, premium quality, warm neutral tones' },
    ],
  },
  {
    category: 'WPC',
    categoryCn: 'WPC木塑',
    items: [
      { id: 'wpc-deck', name: 'Outdoor Decking', nameCn: '户外地板', imageDesc: 'WPC outdoor decking in natural wood color, installed on beautiful patio with garden view' },
      { id: 'wpc-wall', name: 'Wall Panel', nameCn: '墙板', imageDesc: 'WPC wall panel with wood grain texture, modern interior application, warm lighting' },
      { id: 'wpc-fence', name: 'Privacy Fence', nameCn: '围栏', imageDesc: 'WPC privacy fence panel in natural wood tone, contemporary outdoor setting' },
    ],
  },
];

export default function HardMaterialPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <ImagePlaceholder
          imageId="hard-material-hero"
          alt="Premium stone and marble collection"
          aspect="full"
          category="product"
          size="1920x600"
          description="Wide panoramic shot of premium marble and stone slabs arranged vertically in showroom, dramatic side lighting creating golden highlights on polished surfaces"
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className="text-caption fade-in">Hard Material</span>
          <h1 className="fade-in delay-1">硬装材料</h1>
          <p className="text-subtitle fade-in delay-2">Tile · Marble · Sintered Stone · WPC</p>
        </div>
      </section>

      {/* Material Sections */}
      <div className="container">
        {materials.map((group) => (
          <section key={group.category} className={styles.materialSection} id={`material-${group.category.toLowerCase()}`}>
            <div className={`${styles.sectionHeader} fade-in`}>
              <h2 className={styles.sectionTitle}>{group.category}</h2>
              <p className={styles.sectionTitleCn}>{group.categoryCn}</p>
              <div className="divider"></div>
            </div>

            <div className={styles.materialGrid}>
              {group.items.map((item, i) => (
                <div key={item.id} className={`${styles.materialCard} fade-in-scale delay-${(i % 4) + 1}`}>
                  <div className={styles.cardImageWrapper}>
                    <ImagePlaceholder
                      imageId={`hard-${item.id}`}
                      alt={item.name}
                      aspect="4:3"
                      category="texture"
                      size="600x450"
                      description={item.imageDesc}
                      interactive={true}
                    />
                  </div>
                  <div className={styles.cardInfo}>
                    <h4 className={styles.cardName}>{item.name}</h4>
                    <p className={styles.cardNameCn}>{item.nameCn}</p>
                  </div>
                  <div className={styles.cardActions}>
                    <button className={styles.cardAction}>View Details</button>
                    <a href="https://wa.me/6500000000" target="_blank" rel="noopener noreferrer" className={styles.cardAction}>
                      WhatsApp Inquiry
                    </a>
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
