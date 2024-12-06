function InputForm({ title, height, placeholder, type = "text", onChange }) {
  return (
    <>
      <div
        style={{
          fontSize: `18px`,
          fontWeight: "700",
          lineHeight: "26px",
          textUnderlinePosition: " from-font",
          textDecorationSkipInk: "none",
        }}
      >
        {title}
      </div>
      <input
        style={{
          width: `1200px`,
          height: `${height}px`,
          backgroundColor: "#F3F4F6",
          borderRadius: "12px",
          borderStyle: "none",
          margin: "24px 0",
          fontSize: "16px",
          paddingLeft: "24px",
        }}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
export default InputForm;
