"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute bg-black/[.6] flex items-center justify-center top-0 bottom-0 right-0 left-0 z-40">
      <dialog
        ref={dialogRef}
        className="h-screen w-screen sm:w-[1000px] sm:h-[500px] flex flex-col sm:flex-row rounded-lg"
        onClose={onDismiss}
      >
        {children}
        <button
          onClick={onDismiss}
          className="cursor-pointer bg-transparent absolute z-50 top-0 right-0 p-4 text-4xl"
        >
          &times;
        </button>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  );
}
