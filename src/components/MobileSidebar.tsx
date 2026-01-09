"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import headerData from "../datas/HeaderDatas";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathName = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 md:hidden"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-full w-64 bg-white text-primary z-50 md:hidden pt-20 shadow-lg"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {headerData.navLinks.map((link) => {
                const isActive = pathName === link.url;
                return (
                  <Link
                    key={link.name}
                    href={link.url}
                    onClick={onClose}
                    className={`text-lg font-semibold py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-white bg-opacity-20 text-primary"
                        : "text-primary hover:bg-white hover:bg-opacity-10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
