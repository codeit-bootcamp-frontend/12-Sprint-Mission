import styles from './SectionHome.module.css';

const SectionHome = ({ sectionProp }) => {
  const { number, src, keyword, subtitle1, subtitle2, paragraph1, paragraph2 } =
    sectionProp;

  const imgElement = (
    <img
      src={src}
      alt={`${keyword} 이미지입니다.`}
      className={styles['section-img']}
    />
  );

  const makeSectionExplain = () => {
    return (
      <div className={styles['section-explain']}>
        <span className={styles['keyword']}>{keyword}</span>
        <h2 className={styles['section-title']}>
          {subtitle1} <br className={styles['section-title-next-line']} />
          {subtitle2}
        </h2>
        <p>
          {paragraph1} <br />
          {paragraph2}
        </p>
      </div>
    );
  };

  if (number % 2 === 0)
    return (
      <section className={styles['home-main-section']}>
        {makeSectionExplain()}
        {imgElement}
      </section>
    );
  return (
    <section className={styles['home-main-section']}>
      {imgElement}
      {makeSectionExplain()}
    </section>
  );
};

export default SectionHome;
