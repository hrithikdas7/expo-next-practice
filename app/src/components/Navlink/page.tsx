import Link from "next/link";

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="relative px-4 py-2 text-gray-700 font-medium hover:text-green-600 transition group"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-green-500 to-emerald-600 group-hover:w-3/4 transition-all duration-300 rounded-full" />
  </Link>
);
