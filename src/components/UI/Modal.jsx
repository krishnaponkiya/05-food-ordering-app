import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export default function Modal({ children, open, onClose, className = "" }) {
  const dialogref = useRef();
  useEffect(() => {
    if (open) {
      dialogref.current.showModal();
    }
    return () => dialogref.current.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialogref} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
