import { Link } from 'react-router-dom';
import styles from './BannerHome.module.css';

const BannerHome = ({
  className,
  title,
  subtitle,
  imageSrc,
  linkText,
  linkClass,
}) => {
  const bannerPosition = title ? 'top' : 'bottom';
  return (
    <section className={`${styles.banner} ${styles[className]}`}>
      <div className={styles['banner-explain']}>
        {title && <h1>{title}</h1>}
        <h2>{subtitle}</h2>
        {linkText && (
          <Link to="/items" className={styles[linkClass]}>
            {linkText}
          </Link>
        )}
      </div>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`${className} 이미지입니다.`}
          className={styles[`${bannerPosition}-banner-img`]}
        />
      )}
    </section>
  );
};

export default BannerHome;
