"use client";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

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
    <header className="sticky top-0 z-20 w-full border-b bg-white">
      <div className={cn("flex items-center justify-between", className)}>
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={"/"}
            alt="Logo"
            width={40}
            height={40}
            className="border"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {components.map((component, index) => {
                const [[key, value]] = Object.entries(component);
                return (
                  <NavigationMenuItem key={index}>
                    {value.internalLinks ? (
                      <>
                        <NavigationMenuTrigger>
                          {value.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {value.internalLinks.map((link, idx) => (
                            <ListItem
                              key={idx}
                              title={link.title}
                              href={link.href}
                              className={navigationMenuTriggerStyle()}
                            />
                          ))}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={value.href as string}
                          className={cn(
                            pathName === value.href
                              ? "block rounded-md px-4 py-2 text-sm leading-none font-medium text-red-700 transition-colors outline-none select-none hover:!text-red-700 focus:!text-red-700"
                              : "block rounded-md px-4 py-2 text-sm leading-none font-medium transition-colors outline-none select-none hover:!text-red-700 focus:!text-red-700",
                            navigationMenuTriggerStyle(),
                          )}
                        >
                          {value.title}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Us Button */}
          <Button
            variant={"outline"}
            className="hover:text-red-700 focus:text-red-700"
          >
            Contact Us <MoveRight />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-[320px] p-4">
              <SheetHeader className="!p-0">
                <SheetTitle className="text-lg font-semibold">
                  Navigation Menu
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Links */}
              <div className="mt-4 flex flex-col gap-6">
                {components.map((component, index) => {
                  const [[key, value]] = Object.entries(component);

                  return value.internalLinks ? (
                    value.internalLinks.map((link, idx) => (
                      <Link
                        key={idx + link.title}
                        href={link.href}
                        className="block border-b pb-2 text-base leading-none font-medium tracking-wide transition-colors select-none hover:text-red-700 focus:text-red-700"
                      >
                        {link.title}
                      </Link>
                    ))
                  ) : (
                    <Link
                      key={value.title}
                      href={value.href as string}
                      className="block border-b pb-2 text-base leading-none font-medium tracking-wide transition-colors select-none hover:text-red-700 focus:text-red-700"
                    >
                      {value.title}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block w-full rounded-md p-3 leading-none transition-colors outline-none select-none hover:!text-red-700 focus:!text-red-700",
          className,
        )}
        {...props}
      >
        <div className="w-full text-sm font-medium">{title}</div>
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";
