import React from "react";
import AboutUsContent from "./about-us-content";
import AboutUsImage from "./about-us-image";
import StatsItem, { StatItem } from "./stats-item";
import { routes } from "@/app/routes";
import { cn } from "@/lib/utils";
import { CardProps } from "./card";

export interface AboutUsProps {
  title: string;
  subtitle: string;
  tagline: string;
  card: CardProps;
  stats: StatItem[];
  imageAlt: string;
  className?: string;
}

const AboutUsSection: React.FC<AboutUsProps> = ({
  title,
  subtitle,
  tagline,
  card,
  stats,
  imageAlt,
  className,
}) => {
  return (
    <section className={cn("bg-slate-50 p-8", className)}>
      <div className="mx-auto flex flex-col gap-8 md:flex-row">
        <AboutUsImage alt={imageAlt} src={""} />
        <AboutUsContent
          title={title}
          subtitle={subtitle}
          tagline={tagline}
          card={card}
        >
          <div className="mt-6 flex gap-8">
            {stats.map((stat: StatItem, index: number) => (
              <StatsItem key={index} number={stat.number} label={stat.label} />
            ))}
          </div>
        </AboutUsContent>
      </div>
    </section>
  );
};

AboutUsSection.defaultProps = {
  title: "Lorem",
  subtitle:
    "Connecting you to perfect properties—building your future, one home at a time!",
  tagline:
    "Dream home ki talash khatam—find your perfect match aaj hi, bina kisi tension ke!",
  card: {
    title: "Your Dream Home",
    text: "Connecting you to homes and properties that suit your needs, dreams, and goals.",
    buttonText: "LEARN MORE →",
    ctaButtonLink: routes["about-us"],
  },
  stats: [{ number: "20+", label: "Years Experience" }],
  imageAlt: "About us visual",
};

export default AboutUsSection;
