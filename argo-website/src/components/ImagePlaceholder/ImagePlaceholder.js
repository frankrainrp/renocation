'use client';

import { useState } from 'react';
import styles from './ImagePlaceholder.module.css';

/**
 * ImagePlaceholder - 统一图片占位组件
 * 所有图片接口的基础组件，后期可批量替换为真实图片
 * 
 * @param {string} imageId - 唯一标识 (e.g., "hero-bg-001")
 * @param {string} alt - 图片描述
 * @param {string} aspect - 宽高比: "16:9", "4:3", "3:4", "1:1", "3:2", "2:3", "hero", "full"
 * @param {string} category - 分类: brand, product, case, texture, scene, icon, ui
 * @param {string} src - 可选: 实际图片路径
 * @param {string} size - 建议尺寸 (e.g., "1920x1080")
 * @param {string} description - 图片需求描述（供后期生成参考）
 * @param {boolean} interactive - 是否有hover效果
 * @param {string} sizeVariant - small, default, large
 * @param {string} className - 额外class
 * @param {function} onClick - 点击回调
 */
export default function ImagePlaceholder({
  imageId,
  alt = '',
  aspect = '16:9',
  category = 'scene',
  src = null,
  size = '',
  description = '',
  interactive = false,
  sizeVariant = 'default',
  className = '',
  onClick = null,
  priority = false,
  children,
  style = {},
}) {
  const [loaded, setLoaded] = useState(false);

  const aspectMap = {
    '16:9': styles.ratio16x9,
    '4:3': styles.ratio4x3,
    '3:4': styles.ratio3x4,
    '1:1': styles.ratio1x1,
    '3:2': styles.ratio3x2,
    '2:3': styles.ratio2x3,
    'hero': styles.ratioHero,
    'full': styles.ratioFull,
  };

  const sizeMap = {
    small: styles.sizeSmall,
    default: '',
    large: styles.sizeLarge,
  };

  const containerClasses = [
    styles.imagePlaceholder,
    aspectMap[aspect] || styles.ratio16x9,
    sizeMap[sizeVariant] || '',
    interactive ? styles.interactive : '',
    loaded ? styles.imageLoaded : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={containerClasses}
      data-image-id={imageId}
      data-category={category}
      data-suggested-size={size}
      data-description={description}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={style}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${styles.actualImage} ${loaded ? styles.loaded : ''}`}
          onLoad={() => setLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
        />
      ) : (
        <>
          {/* Placeholder Icon - Mountain/Image symbol */}
          <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="2" y="2" width="20" height="20" rx="2" />
            <circle cx="8.5" cy="8.5" r="2" />
            <path d="M14 11l5 5H5l4-4 2.5 2.5L14 11z" />
          </svg>
          {alt && <span className={styles.placeholderLabel}>{alt}</span>}
        </>
      )}
      {children}
    </div>
  );
}
