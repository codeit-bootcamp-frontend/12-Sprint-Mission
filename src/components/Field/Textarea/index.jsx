import clsx from "clsx";
import Error from "../Error";

export default function Textarea({ error, value, ...props }) {
  const valid = value && !error;

  return (
    <>
      <div className="field">
        <textarea
          className={clsx("field-box", valid && "valid", error && "error")}
          value={value}
          {...props}
        />
      </div>
      <Error error={error} />
    </>
  );
}
