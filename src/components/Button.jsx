import './Button.css';

const Button = ({ text, type }) => {
  return (
    <button type={type} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
