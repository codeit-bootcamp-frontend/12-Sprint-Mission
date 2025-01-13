import { Link } from "react-router-dom";
import style from "./CustomSelect.module.css"

interface CustomSelectProps {

  selectView: boolean;
  toggleSelect: (e: React.MouseEvent<HTMLElement>) => void;
  displaySortOrder: string;
  handleSortChange: (newSortOrder: string) => void;

}

export default function CustomSelect({ selectView, toggleSelect, displaySortOrder, handleSortChange }: CustomSelectProps) {

  return (
    <div className={style.selectBox}>
      <Link
        to="#"
        className={`${style.select} ${selectView ? `${style.active}` : ""}`}
        onClick={toggleSelect}
      >
        {displaySortOrder}
      </Link>

      <ul className={style.viewList}>
        <li>
          <Link
            to="#"
            onClick={() => handleSortChange('recent')}
          >
            최신순
          </Link>
        </li>
        <li>
          <Link
            to="#"
            onClick={() => handleSortChange('favorite')}
          >
            좋아요순
          </Link>
        </li>
      </ul>
    </div>
  )

}