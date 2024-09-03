import Link from "next/link";

interface HeaderListItemProps {
  href: string;
  children: React.ReactNode;
}

export default function HeaderListItem({ href, children }: HeaderListItemProps) {
  return (
    <li>
      <Link
        className="px-6 py-3 bg-primary rounded-full border-2 border-black font-bold sm:p-0 sm:bg-white sm:border-none"
        href={`/${href}`}
      >
        {children}
      </Link>
    </li>
  );
}