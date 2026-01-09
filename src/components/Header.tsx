import Image from "next/image";
import headerData from "../datas/HeaderDatas";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 bg-primary flex items-center justify-between text-white">
      <Image
        src="suitmedia.svg"
        alt="Suitmedia Logo"
        width={100}
        height={50}
      ></Image>
      <span className="space-x-5">
        {headerData.navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </span>
    </header>
  );
}
