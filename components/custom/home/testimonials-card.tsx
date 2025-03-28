import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface ClientTestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  imageUrl?: string;
}

export default function ClientTestimonialCard({
  name,
  role,
  testimonial,
  imageUrl,
}: ClientTestimonialCardProps) {
  return (
    <Card className="w-full rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="flex items-center gap-4">
        <Image
          src={imageUrl || "/default-avatar.png"}
          alt={name}
          width={12}
          height={12}
          className="h-14 w-14 rounded-full border-2 border-gray-300 object-cover shadow-sm"
        />
        <div>
          <CardTitle className="text-lg font-semibold text-gray-800">
            {name}
          </CardTitle>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed text-gray-700">{testimonial}</p>
      </CardContent>
    </Card>
  );
}
