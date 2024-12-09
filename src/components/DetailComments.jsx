import React from "react";
import Kebab from "../asset/icon/ic_kebab.png";
import "./detailComments.css";

function DetailComments() {
  return (
    <>
      <div>comments</div>
      <img src={Kebab} alt="더보기 버튼" />
      <div>image</div>
      <div>nickname</div>
      <div>updateAt</div>
    </>
  );
}

export default DetailComments;
