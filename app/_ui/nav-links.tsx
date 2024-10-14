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
    <div className="mx-auto mt-14 grid h-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link, idx) => {
        const LinkIcon = link.icon;
        const cols =
          idx === 0
            ? "lg:row-span-2"
            : idx === 1
              ? "lg:col-span-2"
              : idx === 4
                ? "lg:col-span-2"
                : "";

        return (
          <Link
            prefetch
            key={`link-${idx}`}
            title={`${link.name} qr page`}
            href={link.href}
            className={`block h-full min-h-60 gap-4 rounded-md border-2 p-4 text-sm font-medium transition-all hover:bg-white hover:text-black sm:text-base ${cols}`}
          >
            <GlobeAltIcon className="h-6 w-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
