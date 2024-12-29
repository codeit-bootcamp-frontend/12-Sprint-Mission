import { ReactNode } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: ReactNode }) {
  return createPortal(children, document.querySelector("#root")!);
}
