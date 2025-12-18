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
    className="relative px-4 py-2 text-primary-800 font-medium hover:text-primary-600 transition group"
  >
    {children}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-3/4 transition-all duration-300 rounded-full" />
  </Link>
);
