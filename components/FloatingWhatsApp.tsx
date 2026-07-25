"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { brand } from "@/lib/data";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[70] grid h-14 w-14 place-items-center rounded-full bg-accent text-ink shadow-lg shadow-black/30 hover:bg-accent-dim transition-colors"
      >
        <MessageCircle size={24} />
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div
                className="fixed inset-0 z-[95] grid place-items-center p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="wa-modal-title"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                  onClick={() => setOpen(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-sm rounded-2xl card-border bg-ink-raised p-7"
                >
                  <h2 id="wa-modal-title" className="font-display font-semibold text-xl text-paper">
                    Continue to WhatsApp?
                  </h2>
                  <p className="mt-2 text-sm text-paper-dim">
                    You&apos;ll be redirected to WhatsApp to start a conversation with {brand.handle}.
                  </p>
                  <div className="mt-7 flex gap-3">
                    <button
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-full border border-ink-border py-3 text-sm font-semibold text-paper hover:border-white/25 transition-colors"
                    >
                      Cancel
                    </button>
                    <a
                      href={`https://wa.me/${brand.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex-1 rounded-full bg-accent py-3 text-center text-sm font-semibold text-ink hover:bg-accent-dim transition-colors"
                    >
                      Continue
                    </a>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
