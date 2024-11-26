import LeftArrow from "../asset/arrow_left.png";
import RightArrow from "../asset/arrow_right.png";
import "./PageButton.css";

function PageButton() {
  return (
    <div className="pagebutton-container">
      <div className="pagebutton-number">
        <img className="pagebutton-icon" src={LeftArrow} />
      </div>
      <div className="pagebutton-number active">1</div>
      <div className="pagebutton-number">2</div>
      <div className="pagebutton-number">3</div>
      <div className="pagebutton-number">4</div>
      <div className="pagebutton-number">5</div>
      <div className="pagebutton-number">
        <img className="pagebutton-icon" src={RightArrow} />
      </div>
    </div>
  );
}

export default PageButton;
