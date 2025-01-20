import FormLabel from "./../components/FormLabel";
import FileInput from "./../components/FileInput";
import "./FormLabel.css";
import "./FormItem.css";
import ItemInputValue from "../types/ItemInputValue";

const FormItem = ({ labelName, type, id, name, className, value, onChange, placeholder }: ItemInputValue) => {
  return (
    <li>
      <FormLabel htmlFor={id} labelName={labelName} />
      <div className={type !== "file" ? `input_box` : `input_box input_file_box`}>
        {type === "textarea" ? (
          <textarea id={id} name={name} className={className} value={value} onChange={onChange} placeholder={placeholder}></textarea>
        ) : type === "file" ? (
          <FileInput name={name} value={value} onChange={onChange} />
        ) : (
          <input type={type} id={id} name={name} className={className} value={value} onChange={onChange} placeholder={placeholder} />
        )}
      </div>
    </li>
  );
};
export default FormItem;
