"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  labelledBy?: string;
}

export default function Drawer({ open, onClose, children, labelledBy }: DrawerProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[90]" role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%", y: 0 }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: "100%", y: 0 }}
            transition={{ type: "tween", duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:flex absolute right-0 top-0 h-full w-full max-w-xl flex-col bg-ink-raised border-l border-ink-border overflow-y-auto"
          >
            <DrawerInner onClose={onClose} closeBtnRef={closeBtnRef}>
              {children}
            </DrawerInner>
          </motion.div>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="flex sm:hidden absolute bottom-0 left-0 right-0 max-h-[88vh] flex-col rounded-t-3xl bg-ink-raised border-t border-ink-border overflow-y-auto"
          >
            <div className="flex justify-center pt-3">
              <div className="h-1 w-10 rounded-full bg-white/15" />
            </div>
            <DrawerInner onClose={onClose} closeBtnRef={undefined}>
              {children}
            </DrawerInner>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function DrawerInner({
  children,
  onClose,
  closeBtnRef,
}: {
  children: React.ReactNode;
  onClose: () => void;
  closeBtnRef?: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end p-4 sm:p-5">
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close panel"
          className="grid h-9 w-9 place-items-center rounded-full border border-ink-border text-paper-dim hover:text-paper hover:border-accent/60 transition-colors"
        >
          <X size={16} />
        </button>
      </div>
      <div className="px-6 pb-10 sm:px-10 sm:pb-14">{children}</div>
    </div>
  );
}
