// import { cn } from "@/lib/utils";
// import SectionTitle from "../shared/section-title";

// export default function FeaturesSection({
//   className,
//   sectionContent,
// }: FeaturesSectionProps) {
//   return (
//     <div className={cn("", className)}>
//       <SectionTitle title={sectionContent.sectionTitle} />
//     </div>
//   );
// }
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, HelpCircle } from "lucide-react";
import SectionTitle from "../shared/section-title";

// Shared Section Title Component
// export const SectionTitle = ({
//   title,
//   className,
// }: {
//   title: string;
//   className?: string;
// }) => (
//   <div className={cn("mb-12 text-center", className)}>
//     <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">{title}</h2>
//   </div>
// );

// Feature Card Icon Component
const FeatureIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="mb-4 inline-block max-w-fit rounded-full bg-red-600 p-4">
    <Icon className="h-8 w-8 text-white" />
  </div>
);

// Feature Card Component
const FeatureCard = ({
  title,
  description,
  icon: Icon = Home,
}: {
  title: string;
  description: string;
  icon?: React.ElementType;
}) => (
  <Card className="h-full transition-shadow hover:shadow-lg">
    <CardHeader>
      <FeatureIcon icon={Icon} />
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600">{description}</CardDescription>
    </CardContent>
  </Card>
);

// Main Features Section Component
export default function FeaturesSection({
  className,
  sectionContent,
}: FeaturesSectionProps) {
  // Icons mapping for dynamic icon selection
  const iconMap = {
    "Seamless Solutions Your Success": Home,
    "Proactive Realty Services": HelpCircle,
    "Supreme Home Finders": Home,
  };

  return (
    <div className={cn("mx-auto space-y-8 p-8", className)}>
      <SectionTitle title={sectionContent.sectionTitle} />

      <div className="grid gap-6 md:grid-cols-3">
        {sectionContent.cardContent.map((card, index) => (
          <FeatureCard
            key={index}
            title={card.title}
            description={card.description}
            icon={iconMap[card.title as keyof typeof iconMap]}
          />
        ))}
      </div>
    </div>
  );
}
