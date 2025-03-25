import HeroSection from "@/components/custom/about/hero";

export default function AboutUsPage() {
  return (
    <HeroSection
      content={{
        title: "Let us find the perfect property for you",
        subtitle:
          "Dream home ki talash khatam—find your perfect match aaj hi, bina kisi tension ke!",
        tagline: "Your Dream Home",
      }}
      backgroundImage="/commercial-building.jpg"
    />
  );
}
