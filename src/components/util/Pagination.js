import { ReactComponent as ArrowLeftIcon } from "../../assets/images/icons/arrow_left.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/images/icons/arrow_right.svg";

function Pagination() {
  return (
    <nav className="pagination-wrapper">
      <ul>
        <li>
          <button type="button" disabled>
            <ArrowLeftIcon />
          </button>
        </li>
        <li>
          <button type="button" disabled>
            1
          </button>
        </li>
        <li>
          <button type="button" disabled>
            2
          </button>
        </li>
        <li>
          <button type="button" disabled>
            3
          </button>
        </li>
        <li>
          <button type="button" disabled>
            4
          </button>
        </li>
        <li>
          <button type="button" disabled>
            5
          </button>
        </li>
        <li>
          <button type="button" disabled>
            <ArrowRightIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
