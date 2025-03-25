import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { Bed, MapPin, Microwave, TvMinimalPlay } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  className?: string;
  cardDetails: PropertyCardDetails;
}

export interface PropertyCardDetails {
  propertyImage: string | StaticImageData;
  propertyName: string;
  propertyImageAlt: string;
  propertyLocation: string;
  propertyPrice: string;
  bhkDetails: {
    bed: number;
    hall: number;
    kitchen: number;
  };
}

export default function PropertyCard({
  className,
  cardDetails,
}: PropertyCardProps) {
  return (
    <Card
      className={cn(
        "w-full transform cursor-pointer gap-3 bg-slate-50 transition-all lg:hover:scale-105 lg:hover:shadow-lg lg:focus:scale-105 lg:focus:shadow-lg",
        className,
      )}
    >
      <CardHeader className="p-3">
        <Image
          src={cardDetails.propertyImage}
          alt={cardDetails.propertyImageAlt}
          className="mb-1 w-full rounded-md object-cover"
        />
        <CardTitle className="text-xl font-semibold text-gray-800">
          {cardDetails.propertyName}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-1 p-3 pt-0">
        <p className="text-lg font-medium text-gray-700">
          {cardDetails.propertyPrice}
        </p>
        <CardDescription className="flex items-center gap-1 text-gray-600">
          <MapPin className="text-red-500" /> {cardDetails.propertyLocation}
        </CardDescription>
      </CardContent>
      <Separator orientation="horizontal" />
      <CardFooter className="p-3 py-0">
        <ul className="flex items-center gap-4">
          {Object.entries(cardDetails.bhkDetails).map(([key, value]) => (
            <li
              className="flex items-center gap-1 text-sm text-gray-600"
              key={key + value}
            >
              {key === "bed" && <Bed size={20} className="text-red-500" />}
              {key === "hall" && (
                <TvMinimalPlay size={20} className="text-red-500" />
              )}
              {key === "kitchen" && (
                <Microwave size={20} className="text-red-500" />
              )}
              <span className="font-medium">{value}</span> {key.toUpperCase()}
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
}
