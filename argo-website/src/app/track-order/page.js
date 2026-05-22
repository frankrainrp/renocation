'use client';

import { useState } from 'react';
import styles from './trackorder.module.css';
import ImagePlaceholder from '@/components/ImagePlaceholder/ImagePlaceholder';

const stages = [
  { id: 1, en: 'Order Confirmed', cn: '订单已确认', icon: '✓' },
  { id: 2, en: 'Design & Material Selection', cn: '设计与选材确认', icon: '🎨' },
  { id: 3, en: 'Factory Production', cn: '工厂生产中', icon: '🏭' },
  { id: 4, en: 'Quality Inspection', cn: '质检中', icon: '🔍' },
  { id: 5, en: 'Shipping From China', cn: '中国出货中', icon: '📦' },
  { id: 6, en: 'Ocean Freight In Transit', cn: '海运运输中', icon: '🚢' },
  { id: 7, en: 'Arrived In Singapore', cn: '已抵达新加坡', icon: '🏗️' },
  { id: 8, en: 'Local Delivery', cn: '本地配送安排中', icon: '🚚' },
  { id: 9, en: 'Installation In Progress', cn: '安装进行中', icon: '🔧' },
  { id: 10, en: 'Project Completed', cn: '项目完成', icon: '🏠' },
];

export default function TrackOrderPage() {
  const [searchType, setSearchType] = useState('order');
  const [searchValue, setSearchValue] = useState('');
  const [showDemo, setShowDemo] = useState(false);

  // Demo data for visualization
  const demoCurrentStage = 6;

  const handleSearch = (e) => {
    e.preventDefault();
    setShowDemo(true);
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className="text-caption fade-in">Client Portal</span>
          <h1 className="fade-in delay-1">Track Your Order</h1>
          <p className={`${styles.heroSub} fade-in delay-2`}>
            Real-time visibility into your project journey
          </p>
        </div>
      </section>

      {/* Search Form */}
      <section className={styles.searchSection}>
        <div className={`container container--narrow`}>
          <form className={`${styles.searchForm} fade-in`} onSubmit={handleSearch}>
            <div className={styles.searchTabs}>
              {[
                { value: 'order', label: 'Order Number' },
                { value: 'phone', label: 'Phone' },
                { value: 'email', label: 'Email' },
              ].map(tab => (
                <button
                  key={tab.value}
                  type="button"
                  className={`${styles.searchTab} ${searchType === tab.value ? styles.searchTabActive : ''}`}
                  onClick={() => setSearchType(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className={styles.searchInputRow}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder={
                  searchType === 'order' ? 'Enter your order number (e.g., ARGO-2024-001)'
                  : searchType === 'phone' ? 'Enter your phone number'
                  : 'Enter your email address'
                }
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="submit" className={`btn btn--primary ${styles.searchBtn}`}>
                Track
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Demo Order Result */}
      {showDemo && (
        <section className={styles.resultSection}>
          <div className="container">
            {/* Timeline */}
            <div className={`${styles.timeline} fade-in`}>
              <h3 className={styles.timelineTitle}>Order Timeline</h3>
              <div className={styles.timelineTrack}>
                {stages.map((stage) => (
                  <div
                    key={stage.id}
                    className={`${styles.timelineNode} ${stage.id <= demoCurrentStage ? styles.timelineNodeActive : ''} ${stage.id === demoCurrentStage ? styles.timelineNodeCurrent : ''}`}
                  >
                    <div className={styles.timelineDot}>
                      <ImagePlaceholder
                        imageId={`stage-icon-${stage.id}`}
                        alt={stage.en}
                        aspect="1:1"
                        category="icon"
                        size="48x48"
                        sizeVariant="small"
                        description={`Minimal elegant icon for order stage: ${stage.en}, dark background, gold accent line art style`}
                        style={{ width: 48, height: 48, borderRadius: '50%' }}
                      />
                    </div>
                    <div className={styles.timelineInfo}>
                      <span className={styles.timelineStage}>Stage {stage.id}</span>
                      <span className={styles.timelineLabel}>{stage.en}</span>
                      <span className={styles.timelineLabelCn}>{stage.cn}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Map Placeholder */}
            <div className={`${styles.mapSection} fade-in delay-2`}>
              <h3 className={styles.mapTitle}>Shipping Route</h3>
              <div className={styles.mapContainer}>
                <ImagePlaceholder
                  imageId="shipping-map-bg"
                  alt="China to Singapore shipping route"
                  aspect="16:9"
                  category="ui"
                  size="1200x675"
                  description="Dark elegant world map showing shipping route from China port to Singapore port, golden route line with animated dots, deep ocean dark background, luxury cartographic style"
                />
                <div className={styles.mapOverlay}>
                  <div className={styles.mapRoute}>
                    <span className={styles.mapPort}>Shanghai, China</span>
                    <span className={styles.mapLine}>━━━━━━━━━ ✦ ━━━━━━━━━</span>
                    <span className={styles.mapPort}>Singapore</span>
                  </div>
                  <p className={styles.mapEta}>Estimated Arrival: --</p>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className={`${styles.orderDetails} fade-in delay-3`}>
              <h3 className={styles.detailsTitle}>Order Details</h3>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Product</span>
                  <span className={styles.detailValue}>Custom Kitchen System</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Material</span>
                  <span className={styles.detailValue}>Italian Marble + Walnut</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Status</span>
                  <span className={`${styles.detailValue} text-gold`}>Ocean Freight In Transit</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Project Manager</span>
                  <span className={styles.detailValue}>--</span>
                </div>
              </div>

              {/* Product Images placeholder */}
              <div className={styles.productImages}>
                {[1, 2, 3].map(n => (
                  <ImagePlaceholder
                    key={n}
                    imageId={`order-product-${n}`}
                    alt={`Order product photo ${n}`}
                    aspect="1:1"
                    category="product"
                    size="300x300"
                    description={`Product photo ${n} for order tracking, showing the custom furniture being manufactured or packed`}
                  />
                ))}
              </div>

              {/* Progress Photos placeholder */}
              <div className={styles.progressSection}>
                <h4 className={styles.progressTitle}>Progress Photos</h4>
                <div className={styles.progressGrid}>
                  {[1, 2, 3, 4].map(n => (
                    <ImagePlaceholder
                      key={n}
                      imageId={`order-progress-${n}`}
                      alt={`Progress photo ${n}`}
                      aspect="4:3"
                      category="case"
                      size="400x300"
                      description={`Progress photo ${n} showing manufacturing, packaging, shipping container, or installation progress`}
                    />
                  ))}
                </div>
              </div>

              <a href="https://wa.me/6500000000" target="_blank" rel="noopener noreferrer" className={`btn btn--primary ${styles.whatsappBtn}`}>
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
