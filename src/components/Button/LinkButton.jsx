import styles from "./LinkButton.moudle";

const LinkButton = ({ onClick, children, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LinkButton;
