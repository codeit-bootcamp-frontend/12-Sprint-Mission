import { useState } from "react";
import clsx from "clsx";
import { Error } from "@components/Field";

export function NumberInput({
  type = "number",
  error,
  value,
  formatter,
  ...props
}) {
  const [currentType, setCurrentType] = useState(type);
  const valid = value && !error;

  let formattedValue = value || "";

  if (formatter && formattedValue && currentType === "text") {
    formattedValue = formatter(value);
  }

  return (
    <>
      <div className="field">
        <input
          type={currentType}
          className={clsx("field-box", valid && "valid", error && "error")}
          value={formattedValue}
          onFocus={() => setCurrentType("number")}
          onBlur={() => setCurrentType("text")}
          {...props}
        />
      </div>
      <Error error={error} />
    </>
  );
}
