"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-4 py-2 font-medium transition group ${isActive
        ? "text-primary-700"
        : "text-primary-800 hover:text-primary-600"
        }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 rounded-full ${isActive
          ? "w-3/4"
          : "w-0 group-hover:w-3/4"
          }`}
      />
    </Link>
  );
};

export default NavLink;
