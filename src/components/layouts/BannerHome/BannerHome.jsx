import { Link } from 'react-router-dom';

const BannerHome = ({
  className,
  title,
  subtitle1,
  subtitle2,
  nextLineClass,
  imageSrc,
  linkText,
  linkClass,
}) => {
  const subtitle = (
    <>
      {subtitle1}
      <br className={nextLineClass} />
      {subtitle2}
    </>
  );
  return (
    <section className={`banner ${className}`}>
      <div className="banner-explain">
        {title && <h1>{title}</h1>}
        <h2>{subtitle}</h2>
        {linkText && (
          <Link to="/items" className={linkClass}>
            {linkText}
          </Link>
        )}
      </div>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`${className} 이미지입니다.`}
          className={`${className}-img`}
        />
      )}
    </section>
  );
};

export default BannerHome;
