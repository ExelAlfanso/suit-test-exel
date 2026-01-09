"use client";

import { useState } from "react";
import Image from "next/image";
import headerData from "../datas/HeaderDatas";
import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
import { useTransform } from "motion/react";
import MobileSidebar from "./MobileSidebar";
import { ListIcon } from "@phosphor-icons/react";
export default function Header({
  reference,
}: {
  reference: React.RefObject<HTMLDivElement | null>;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start start", "end start"],
  });
  const headerOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0])
  );

  return (
    <>
      <motion.header
        initial={{ opacity: 1 }}
        style={{
          opacity: headerOpacity,
        }}
        className="p-4 bg-primary flex items-center justify-between text-white px-20 fixed w-full top-0 z-50 max-md:px-4"
      >
        <Image
          src="suitmedia.svg"
          alt="Suitmedia Logo"
          width={100}
          height={50}
        ></Image>
        <span className="flex gap-6 max-md:hidden">
          {headerData.navLinks.map((link) => {
            const isActive = pathName === link.url;
            return (
              <Link key={link.name} href={link.url} className={` relative`}>
                {link.name}
                {
                  <span
                    className={`absolute left-0 -bottom-2 w-full h-full border-b-3 border-white transform transition-transform duration-100 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                }
              </Link>
            );
          })}
        </span>

        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="hidden max-md:flex flex-col gap-1.5 cursor-pointer"
          aria-label="Open menu"
        >
          <ListIcon weight="bold" size={36}></ListIcon>
        </button>
      </motion.header>

      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
}
