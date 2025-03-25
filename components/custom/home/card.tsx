import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
// import { CardProps } from "../types/aboutUs";

const Card: React.FC<CardProps> = ({
  title,
  text,
  buttonText,
  ctaButtonLink,
}) => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <h3 className="mb-4 text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="mb-6 leading-relaxed text-gray-600">{text}</p>
      <Button
        asChild
        className="rounded-md bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700 focus:bg-red-700 focus:outline-none focus-visible:bg-red-700 focus-visible:outline-none"
      >
        <Link href={ctaButtonLink}> {buttonText}</Link>
      </Button>
    </div>
  );
};

export default Card;
