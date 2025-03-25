import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Facebook, LucideProps, Instagram, Twitter } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import FooterLinks from "./footer-links";

const footerSocialLinks = [
  {
    href: "#",
    icon: Facebook,
  },
  {
    href: "#",
    icon: Instagram,
  },
  {
    href: "#",
    icon: Twitter,
  },
];
const footerLinks = [
  { href: "/about", title: "About Us" },
  { href: "/services", title: "Services" },
  { href: "/contact", title: "Contact" },
];

interface Props {
  className?: string;
}
export default function Footer({ className }: Props) {
  return (
    <footer className="w-full bg-slate-900">
      <div
        className={cn(
          "flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-start xl:gap-20",
          className,
        )}
      >
        {/* logo & social links  */}
        <div className="basis-1/3 text-gray-300">
          <Image
            src={"/"}
            alt="company logo"
            width={50}
            height={30}
            className="mb-4 h-10 w-full object-contain text-2xl"
          />
          <p className="text-md mb-4 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            laborum, tenetur nobis beatae voluptate expedita, minus qui
            explicabo provident distinctio similique et autem quidem ipsa
            ducimus sit, ut dolorem omnis.
          </p>
          <ul className="flex w-20 items-center justify-between gap-4">
            {footerSocialLinks.map((link, i) => (
              <li key={link.href + i} className="">
                <FooterSocial
                  footerSocial={link}
                  className="focus hover:text-red-700 focus:text-red-700 focus:outline-none focus-visible:text-red-700 focus-visible:outline-none"
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FooterLinks heading="Useful Links" links={footerLinks} />
        </div>
        <div>
          <FooterLinks heading="Other Links" links={footerLinks} />
        </div>
        ``
      </div>
    </footer>
  );
}

interface FooterSocialProps {
  className?: string;
  footerSocial: {
    href: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  };
}

function FooterSocial({ footerSocial, className }: FooterSocialProps) {
  const { href, icon: Icon } = footerSocial;

  return (
    <Link href={href} className={cn("w-min", className)}>
      <Icon size={24} />
    </Link>
  );
}
