import React from "react";
import { useParams } from "react-router-dom";
import ItemPageDescription from "./components/ItemPageDescription";
import style from "./ItemPage.module.scss";
import ItemComment from "./components/ItemComment";
import Comments from "./components/Comments";

function Itempage() {
  const { id } = useParams(); // URL에서 id 파라미터를 추출
  return (
    <div className={style.container}>
      <ItemPageDescription id={id} />
      <hr />
      <ItemComment />
      <Comments id={id} />
    </div>
  );
}

export default Itempage;
