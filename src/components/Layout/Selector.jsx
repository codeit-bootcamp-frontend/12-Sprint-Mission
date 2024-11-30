import './Selector.css';
import '../../style/global.css';
import arrowDownImg from '../../images/ic_arrow_down.png';
import { useState } from 'react';

function Selector({ onOrderByChange }) {
  const [isSelector, setIsSelector] = useState(false);

  const toggleSelector = () => setIsSelector(!isSelector);

  return (
    <div className="selector">
      <div className="selected" onClick={toggleSelector}>
        <div className="selectedValue">최신순</div>
        <img src={arrowDownImg} alt="화살표 이미지" />
      </div>
      {isSelector && (
        <div className="options">
          <div
            className="option"
            onClick={() => {
              onOrderByChange('recent');
              toggleSelector();
            }}
          >
            최신순
          </div>
          <div
            className="option lastOption"
            onClick={() => {
              onOrderByChange('favorite');
              toggleSelector();
            }}
          >
            좋아요순
          </div>
        </div>
      )}
    </div>
  );
}

export default Selector;
