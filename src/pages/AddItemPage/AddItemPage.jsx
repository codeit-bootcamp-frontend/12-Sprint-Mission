import ImageUpload from "../../components/UI/ImageUpload";
import "./AddItemPage.css";

function AddItemPage() {
  return (
    <div className="container">
      <form>
        <div className="titleSection">
          <h1 className="sectionTitle">상품 등록하기</h1>
          <button type="submit" className="addItemButton button">
            등록
          </button>
        </div>

        <div className="inputSection">
          <ImageUpload title="상품 이미지" />
        </div>
      </form>
    </div>
  );
}

export default AddItemPage;
