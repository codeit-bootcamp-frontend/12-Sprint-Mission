import { iconData } from "./iconData.jsx";

const Icon = ({ name, size, color = "black", ...props }) => {
  const icon = iconData[name];
  if (!icon) {
    console.warn(`${name}은 없는 아이콘입니다.`);
    return null;
  }
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {icon}
    </svg>
  );
};

export default Icon;
