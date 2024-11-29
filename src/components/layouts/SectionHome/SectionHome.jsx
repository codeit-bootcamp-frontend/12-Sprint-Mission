import styles from './SectionHome.module.css';

const SectionHome = ({ sectionProp }) => {
  const { number, src, keyword, subtitle, paragraph } = sectionProp;

  const imgElement = (
    <img
      src={src}
      alt={`${keyword} 이미지입니다.`}
      className={styles['section-img']}
    />
  );

  const MakeSectionExplain = () => {
    return (
      <div className={styles['section-explain']}>
        <span className={styles['keyword']}>{keyword}</span>
        <h2 className={styles['section-title']}>{subtitle}</h2>
        <p>{paragraph}</p>
      </div>
    );
  };

  if (number % 2 === 0)
    return (
      <section className={styles['home-main-section']}>
        {MakeSectionExplain()}
        {imgElement}
      </section>
    );
  return (
    <section className={styles['home-main-section']}>
      {imgElement}
      {MakeSectionExplain()}
    </section>
  );
};

export default SectionHome;
