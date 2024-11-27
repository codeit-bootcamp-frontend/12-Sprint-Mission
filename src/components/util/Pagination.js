import { ReactComponent as ArrowLeftIcon } from "../../assets/images/icons/arrow_left.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/images/icons/arrow_right.svg";
import "./Pagination.css";

function Pagination() {
  return (
    <nav className="pagination-wrapper">
      <ul>
        <li>
          <button type="button" disabled>
            <ArrowLeftIcon />
          </button>
        </li>
        <li className="active">
          <button type="button">1</button>
        </li>
        <li>
          <button type="button">2</button>
        </li>
        <li>
          <button type="button">3</button>
        </li>
        <li>
          <button type="button">4</button>
        </li>
        <li>
          <button type="button">5</button>
        </li>
        <li>
          <button type="button">
            <ArrowRightIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
