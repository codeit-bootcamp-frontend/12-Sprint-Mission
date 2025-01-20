import { useRouter } from "next/router";
import style from "./BoardHeader.module.css";

export default function BoardHeader() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/addboard");
  };

  return (
    <div className={style.post_header}>
      <h3>게시글</h3>
      <button onClick={handleClick}>글쓰기</button>
    </div>
  );
}
