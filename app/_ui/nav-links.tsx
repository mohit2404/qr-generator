import {
  AtSymbolIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PhoneIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    name: "Site / Link",
    href: "/site-url",
    icon: GlobeAltIcon,
  },
  {
    name: "Email",
    href: "/email",
    icon: AtSymbolIcon,
  },
  {
    name: "Text",
    href: "/text",
    icon: DocumentTextIcon,
  },
  {
    name: "Whatsapp",
    href: "/whats-app",
    icon: ViewfinderCircleIcon,
  },
  {
    name: "Phone",
    href: "/phone",
    icon: PhoneIcon,
  },
  {
    name: "Sms",
    href: "/sms",
    icon: ChatBubbleOvalLeftEllipsisIcon,
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
            className={`hover:bg-light hover:text-dark relative grid h-full min-h-60 place-items-center gap-4 overflow-hidden rounded-md border-2 p-4 transition-all sm:text-base ${cols}`}
          >
            <LinkIcon className="absolute -left-10 -top-10 w-40 opacity-70" />
            <p className="gradient-text text-center text-2xl font-bold">
              {link.name} QR
            </p>
          </Link>
        );
      })}
    </div>
  );
}
