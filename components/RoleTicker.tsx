"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RoleTicker({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <div className="flex items-center gap-2.5 text-sm sm:text-base text-paper-dim">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      <div className="relative h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="block font-medium text-paper"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
