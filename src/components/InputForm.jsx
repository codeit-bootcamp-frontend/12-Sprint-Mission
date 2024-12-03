function InputForm({ width, height, placeholder }) {
  return (
    <div>
      <div>
        <input
          style={{
            width: `${width}px`,
            height: `${width}px`,
            backgroundColor: "#F3F4F6",
            borderRadius: "12px",
            borderStyle: "none",
          }}
        ></input>
      </div>
    </div>
  );
}
export default InputForm;
