import Image from "next/image";
import Kebab from "../assets/icon/ic_kebab.png";

function DetailComments() {
  return (
    <>
      <div>comments</div>
      <Image src={Kebab} alt="더보기 버튼" />
      <div>image</div>
      <div>nickname</div>
      <div>updateAt</div>
    </>
  );
}

export default DetailComments;
