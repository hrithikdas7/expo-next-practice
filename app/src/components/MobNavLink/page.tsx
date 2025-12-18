import Link from "next/link";


export const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-50 transition"
  >
    {children}
  </Link>
);
