import Link from "next/link";
import { usePathname } from "next/navigation";


export const MobileNavLink = ({
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
      className={`px-4 py-3 rounded-lg text-lg font-medium transition ${isActive
        ? "bg-primary-50 text-primary-700 shadow-sm border border-primary-100"
        : "text-primary-800 hover:bg-primary-50 hover:text-primary-700"
        }`}
    >
      {children}
    </Link>
  );
};
