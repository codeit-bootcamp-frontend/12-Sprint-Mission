import { createPortal } from "react-dom";

export function Modal({ children }) {
  return createPortal(children, document.querySelector("#root"));
}
