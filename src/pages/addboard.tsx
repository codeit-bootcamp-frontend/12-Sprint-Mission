import { createPost } from "@/services/postService";
import styles from "./addboard.module.css";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert("이미지 크기가 너무 큽니다. 최대 5MB 이하의 이미지만 업로드 가능합니다.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;

    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      await createPost({ title, content, image });
      alert("게시물이 등록되었습니다.");
      router.push("/boards");
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message || "게시물 등록에 실패했습니다.");
      } else {
        alert("게시물 등록에 실패했습니다.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>게시글 쓰기</h2>
        <button onClick={handleSubmit} disabled={isSubmitting}>
          등록
        </button>
      </div>

      <div className={styles.main}>
        <div className={styles.section}>
          <p className={styles.label}>*제목</p>
          <input
            className={styles.input}
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.section}>
          <p className={styles.label}>*내용</p>
          <textarea
            className={styles.textarea}
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className={styles.section}>
          <p className={styles.label}>*이미지</p>
          <div className={styles.imageUploadContainer}>
            <div className={styles.uploadBox} onClick={handleUploadClick} role="button" tabIndex={0}>
              <div className={styles.plusIcon}>+</div>
              <p>이미지 등록</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.hiddenInput}
              />
            </div>
            {preview && (
              <div className={styles.previewBox}>
                <img src={preview || "/placeholder.svg"} alt="Preview" className={styles.previewImage} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
