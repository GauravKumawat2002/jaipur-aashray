import { cn } from "@/lib/utils";

interface SectionTitleProps {
  className?: string;
  title: string;
  primaryColor?: string;
}

export default function SectionTitle({
  primaryColor = "#c22126",
  title,
  className,
}: SectionTitleProps) {
  return (
    <h1
      className={cn("text-3xl leading-tight font-bold md:text-4xl", className)}
    >
      {title.split(" ").slice(0, -1).join(" ")}{" "}
      <span style={{ color: primaryColor }} className="text-4xl md:text-5xl">
        {title.split(" ").slice(-1)}
      </span>
    </h1>
  );
}
