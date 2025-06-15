import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, isOpen }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);
  return createPortal(
    <dialog
      ref={dialogRef}
      className="fixed inset-(--modal-inset) mx-auto z-20 max-w-96 backdrop:bg-black backdrop:opacity-50 bg-transparent"
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
