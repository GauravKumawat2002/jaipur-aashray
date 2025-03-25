// import React from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { ChevronRight } from "lucide-react";

// // Overlay Text Component
// const OverlayText = ({
//   title,
//   subtitle,
//   tagline,
// }: {
//   title: string;
//   subtitle: string;
//   tagline?: string;
// }) => (
//   <div className="absolute inset-0 z-10 flex items-end bg-black/50 px-4 pb-16 backdrop-blur-xs md:px-12">
//     <div className="max-w-4xl rounded-sm border-2 p-4">
//       {tagline && (
//         <p className="mb-2 text-sm tracking-wider text-white/80 uppercase">
//           {tagline}
//         </p>
//       )}
//       <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
//         {title}
//       </h1>
//       <p className="mb-6 text-base text-white/80 md:text-lg">{subtitle}</p>
//       <Button variant="default" className="bg-red-600 hover:bg-red-700">
//         Learn More
//         <ChevronRight className="ml-2 h-4 w-4" />
//       </Button>
//     </div>
//   </div>
// );

// // Main Hero Component
// export default function HeroSection({
//   className,
//   backgroundImage,
//   content,
// }: {
//   className?: string;
//   backgroundImage?: string;
//   content: {
//     title: string;
//     subtitle: string;
//     tagline?: string;
//   };
// }) {
//   return (
//     <div
//       className={cn(
//         "relative h-[600px] w-full overflow-hidden md:h-[700px]",
//         className,
//       )}
//     >
//       {/* Background Image Placeholder */}
//       <div className="absolute inset-0 z-0">
//         {backgroundImage ? (
//           <div
//             className={`h-full w-full bg-[url(${backgroundImage})] bg-cover bg-fixed`}
//           ></div>
//         ) : (
//           <div className="h-full w-full bg-gray-800 opacity-70"></div>
//         )}
//       </div>

//       {/* Overlay Text */}
//       <OverlayText
//         title={content.title}
//         subtitle={content.subtitle}
//         tagline={content.tagline}
//       />
//     </div>
//   );
// }
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { routes } from "@/app/routes";

// Overlay Text Component
const OverlayText = ({
  title,
  subtitle,
  tagline,
}: {
  title: string;
  subtitle: string;
  tagline?: string;
}) => (
  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm md:px-12">
    <div className="max-w-4xl rounded-lg border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md md:p-12">
      {tagline && (
        <p className="mb-3 text-sm tracking-wider text-white/80 uppercase">
          {tagline}
        </p>
      )}
      <h1 className="font-poppins mb-5 text-4xl leading-tight text-white md:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mb-8 max-w-3xl text-base text-white/90 md:text-lg">
        {subtitle}
      </p>
      <div className="flex justify-center space-x-4">
        <Button className="bg-red-600 hover:bg-red-700">
          Learn More
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          asChild
          className="focus-visible: bg-transparent font-medium text-white/80 hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white focus-visible:text-white"
        >
          <Link href={routes["contact-us"]}>Contact Us</Link>
        </Button>
      </div>
    </div>
  </div>
);

// Main Hero Component
export default function HeroSection({
  className,
  backgroundImage,
  content,
}: {
  className?: string;
  backgroundImage?: string;
  content: {
    title: string;
    subtitle: string;
    tagline?: string;
  };
}) {
  return (
    <div
      className={cn(
        "relative h-[500px] w-full overflow-hidden md:h-[600px]",
        className,
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <div
            className={`h-full w-full bg-[url(${backgroundImage})] bg-cover bg-fixed bg-center`}
          ></div>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-blue-900 to-indigo-900 opacity-90"></div>
        )}
      </div>

      {/* Overlay Text */}
      <OverlayText
        title={content.title}
        subtitle={content.subtitle}
        tagline={content.tagline}
      />
    </div>
  );
}
