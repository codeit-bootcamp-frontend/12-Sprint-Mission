interface Props {
  htmlFor: string;
  labelName: string;
}

const FormLabel = ({ htmlFor, labelName }: Props) => {
  return (
    <label htmlFor={htmlFor} className="title">
      {labelName}
    </label>
  );
};
export default FormLabel;
