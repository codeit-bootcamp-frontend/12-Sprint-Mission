const FormLabel = ({ htmlFor, labelName }) => {
  return (
    <label htmlFor={htmlFor} className="title">
      {labelName}
    </label>
  );
};
export default FormLabel;
