"use client";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { usePathname } from "next/navigation";

const components: {
  [key: string]: {
    title: string;
    href?: string;
    internalLinks?: { title: string; href: string }[];
  };
}[] = [
  {
    home: { title: "Home", href: "/" },
  },
  {
    "about-us": { title: "About Us", href: "/about-us" },
  },
  { properties: { title: "Properties", href: "/properties" } },
  {
    links: {
      title: "Links",
      internalLinks: [
        { title: "Blogs", href: "/blogs" },
        { title: "Frequently Asked Questions", href: "/faq" },
        { title: "Privacy and Policy", href: "/privacy-and-policy" },
        { title: "Terms and Conditions", href: "/terms-and-conditions" },
        { title: "Testimonials", href: "/testimonials" },
      ],
    },
  },
];

export default function Navbar({ className }: { className?: string }) {
  const pathName = usePathname();

  return (
    <header className={cn("border-b w-full", className)}>
      <div className="flex xl:gap-48 mx-auto items-center max-[1440px]:px-32 justify-between max-w-[1440px]">
        <Link href={"/"}>
          <Image src={"/"} alt="jaipur-aashray logo" width={80} height={80} className=" border" />
        </Link>
        <NavigationMenu className="">
          <NavigationMenuList className="">
            {components.map((component, index) => {
              const [[key, value]] = Object.entries(component);

              return (
                <NavigationMenuItem key={index}>
                  {value.internalLinks ? (
                    // If internalLinks exist, show dropdown
                    <>
                      <NavigationMenuTrigger>{value.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {value.internalLinks.map((link, idx) => (
                          <ListItem key={idx} title={link.title} href={link.href} className={navigationMenuTriggerStyle()} />
                        ))}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    // If no internalLinks, render a direct link
                    <NavigationMenuLink asChild>
                      <a
                        href={value.href}
                        className={cn(
                          pathName === value.href
                            ? "px-4 py-2 text-sm font-medium block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors text-red-700 hover:!text-red-700 focus:!text-red-700"
                            : "px-4 py-2 text-sm font-medium block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:!text-red-700 focus:!text-red-700",
                          navigationMenuTriggerStyle()
                        )}>
                        {value.title}
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant={"outline"} className="hover:text-red-700 focus:text-red-700 focus-within:text-red-700">
          Contact Us <MoveRight />{" "}
        </Button>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(({ className, title, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild className="w-full">
      <a ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none  outline-none transition-colors hover:!text-red-700 focus:!text-red-700", className)} {...props}>
        <div className="text-sm font-medium leading-none w-full">{title}</div>
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
