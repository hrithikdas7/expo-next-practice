import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
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
      className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${isActive
        ? "bg-primary-50 text-primary-700 shadow-sm ring-1 ring-primary-100"
        : "text-gray-600 hover:text-primary-600 hover:bg-gray-50"
        }`}
    >
      {children}
    </Link>
  );
};
