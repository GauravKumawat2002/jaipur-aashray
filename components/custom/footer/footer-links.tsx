import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Link {
  href: string;
  title: string;
}

interface FooterLinksProps {
  heading: string;
  className?: string;
  links: Link[];
}

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
            className="text-inherit no-underline"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </footer>
  );
}
