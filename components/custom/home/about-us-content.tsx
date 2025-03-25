import React, { ReactNode } from "react";
import Card from "./card";

const AboutUsContent: React.FC<AboutUsContentProps> = ({
  title,
  subtitle,
  tagline,
  card,
  children,
}) => {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
      <p className="text-xl leading-relaxed text-gray-700">{subtitle}</p>
      <p className="text-gray-600 italic">{tagline}</p>

      <Card
        title={card.title}
        text={card.text}
        buttonText={card.buttonText}
        ctaButtonLink={card.ctaButtonLink}
      />

      {children}
    </div>
  );
};

export default AboutUsContent;
