'use client';

import styles from './ChapterSection.module.css';
import ImagePlaceholder from '@/components/ImagePlaceholder/ImagePlaceholder';
import Link from 'next/link';

const iconMap = {
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 20h20M4 20V10l4 2V8l4 2V6l4 4v10" />
      <rect x="16" y="12" width="4" height="8" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 11l5-5 5 5M12 6v12M3 17l4-4M21 17l-4-4" />
    </svg>
  ),
};

export default function ChapterSection({
  number,
  titleEn,
  titleCn,
  images = [],
  paragraphs = [],
  highlights = [],
  alignment = 'left',
  closingQuote = '',
  ctas = [],
  isLast = false,
}) {
  const bgImage = images.find(img => img.aspect === 'full');
  const sideImages = images.filter(img => img.aspect !== 'full');

  return (
    <section
      className={`${styles.chapter} ${styles[`align${alignment.charAt(0).toUpperCase() + alignment.slice(1)}`]}`}
      id={`chapter-${number}`}
    >
      {/* Background */}
      {bgImage && (
        <div className={styles.chapterBg}>
          <ImagePlaceholder
            imageId={bgImage.id}
            alt={bgImage.alt}
            aspect="full"
            category={bgImage.category}
            size={bgImage.size}
            description={bgImage.description}
            src={bgImage.src}
          />
          <div className={styles.bgOverlay}></div>
        </div>
      )}

      <div className={`container ${styles.chapterContent}`}>
        {/* Chapter Number */}
        <div className={`${styles.chapterNumber} fade-in`}>
          <span className={styles.chapterLabel}>Chapter</span>
          <span className={styles.chapterNum}>{number}</span>
        </div>

        {/* Titles */}
        <div className={`${styles.chapterTitles} fade-in delay-1`}>
          <h2 className={styles.chapterTitleEn}>{titleEn}</h2>
          <p className={styles.chapterTitleCn}>{titleCn}</p>
          <div className={styles.chapterDivider}></div>
        </div>

        {/* Content Grid */}
        <div className={styles.chapterGrid}>
          {/* Text Column */}
          <div className={styles.chapterText}>
            {paragraphs.map((p, i) => (
              <p key={i} className={`${styles.chapterParagraph} fade-in delay-${i + 2}`}>
                {p}
              </p>
            ))}

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className={`${styles.highlights} fade-in delay-4`}>
                {highlights.map((h, i) => (
                  <div key={i} className={styles.highlightItem}>
                    <div className={styles.highlightIcon}>
                      {iconMap[h.icon]}
                    </div>
                    <span className={styles.highlightLabel}>{h.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Closing Quote */}
            {closingQuote && (
              <blockquote className={`${styles.closingQuote} fade-in delay-3`}>
                &quot;{closingQuote}&quot;
              </blockquote>
            )}

            {/* CTAs */}
            {ctas.length > 0 && (
              <div className={`${styles.chapterCtas} fade-in delay-4`}>
                {ctas.map((cta, i) => (
                  <Link
                    key={i}
                    href={cta.href}
                    className={`btn ${i === 0 ? 'btn--primary' : 'btn--outline'}`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Image Column */}
          {sideImages.length > 0 && (
            <div className={styles.chapterImages}>
              {sideImages.map((img, i) => (
                <div
                  key={img.id}
                  className={`${styles.chapterImageWrapper} fade-in-scale delay-${i + 2}`}
                >
                  <ImagePlaceholder
                    imageId={img.id}
                    alt={img.alt}
                    aspect={img.aspect}
                    category={img.category}
                    size={img.size}
                    description={img.description}
                    interactive={true}
                    src={img.src}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chapter transition decoration */}
      {!isLast && (
        <div className={styles.chapterTransition}>
          <div className={styles.transitionLine}></div>
          <div className={styles.transitionDot}></div>
        </div>
      )}
    </section>
  );
}
