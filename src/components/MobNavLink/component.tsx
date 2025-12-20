"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 py-3 rounded-lg text-lg font-medium transition flex items-center ${isActive
        ? "text-primary-700 bg-primary-50/50"
        : "text-primary-800 hover:bg-primary-50 hover:text-primary-700"
        }`}
    >
      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2" />}
      {children}
    </Link>
  );
};

export default MobileNavLink;
