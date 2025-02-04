import { useEffect, useState } from "react";
import ContentSection from "./components/ContentSection";
import ImageSection from "./components/ImageSection";
import TitleSection from "./components/TitleSection";
import styles from "./index.module.css";
import createArticles from "@/lib/create-articles";

export default function Page() {
  const [values, setValues] = useState({
    title: "",
    content: "",
    image: null as File | null,
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    if (values.image) {
      formData.append("image", values.image);
    }

    try {
      await createArticles(formData);
      // 상태 초기화
      setValues({ title: "", content: "", image: null });
      alert("게시글이 성공적으로 등록되었습니다!");
    } catch (error) {
      console.error("게시글 등록 실패:", error);
      alert("게시글 등록에 실패했습니다.");
    }
  };

  useEffect(() => {
    setIsDisabled(!values.title || !values.content);
  }, [values.title, values.content]);
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.head}>
          <h1 className={styles.title}>게시글 쓰기</h1>
          <button disabled={isDisabled} type="submit" className={styles.button}>
            등록
          </button>
        </div>
        <TitleSection
          title={values.title}
          setTitle={(title) => setValues((prev) => ({ ...prev, title }))}
        />
        <ContentSection
          content={values.content}
          setContent={(content) => setValues((prev) => ({ ...prev, content }))}
        />
        <ImageSection
          image={values.image}
          setImage={(image) => setValues((prev) => ({ ...prev, image }))}
        />
      </form>
    </div>
  );
}
