import { ReactComponent as DeleteIcon } from "../../assets/images/icons/ic_x.svg";
import "./DeleteButton.css";

function DeleteButton({ onClick }) {
  return (
    <button type="button" className="deleteButton" onClick={onClick}>
      <DeleteIcon className="deleteIcon" />
    </button>
  );
}

export default DeleteButton;
