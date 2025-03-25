import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function FooterLinks({
  heading,
  links,
  className,
}: FooterLinksProps) {
  return (
    <footer
      className={cn(
        "flex w-full flex-col items-stretch text-gray-200",
        className,
      )}
    >
      <h2 className="mb-4 text-xl font-bold">{heading}</h2>
      <div className="flex flex-col gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-inherit no-underline outline-none hover:text-red-600 focus:text-red-600 focus-visible:text-red-600"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </footer>
  );
}
