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
      </form>
    </div>
  );
}

export default AddItemPage;
