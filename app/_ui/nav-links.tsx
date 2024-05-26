import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    name: "Website",
    href: "/website",
    icon: GlobeAltIcon,
  },
  {
    name: "Text",
    href: "/text",
    icon: GlobeAltIcon,
  },
  {
    name: "Email",
    href: "/text",
    icon: GlobeAltIcon,
  },
  {
    name: "Location",
    href: "/text",
    icon: GlobeAltIcon,
  },
  {
    name: "Phone",
    href: "/text",
    icon: GlobeAltIcon,
  },
  {
    name: "Sms",
    href: "/text",
    icon: GlobeAltIcon,
  },
];

export default function NavLinks() {
  return (
    <div className="mx-auto mt-14 grid h-auto w-full grid-cols-1 gap-4 md:grid-cols-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            prefetch
            key={link.name}
            href={link.href}
            className={`flex items-center justify-center gap-4 rounded-md border-2 p-4 text-sm font-medium transition-all hover:bg-white hover:text-black sm:text-base`}
          >
            <LinkIcon className="h-6 w-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
