"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Globe,
  Users,
  Book,
  Shield,
  Rocket,
  MapPin,
  Target,
  Heart,
  CheckCircle,
  // BriefcaseIcon,
  Building,
  // HandshakeIcon,
  TrendingUp,
} from "lucide-react";

// Type Definitions
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   quote: string;
//   image: string;
// }

interface Milestone {
  id: number;
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
}

interface ValueProps {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}
// interface ServiceOffering {
//   id: number;
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   benefits: string[];
// }

// interface InvestmentStrategy {
//   id: number;
//   type: string;
//   description: string;
//   potentialReturn: string;
//   riskLevel: "Low" | "Medium" | "High";
// }

// Components
import HeroSection from "./hero";
import SectionTitle from "../shared/section-title";

// Data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Founder & CEO",
    image: "/api/placeholder/400/400",
    bio: "With over 15 years of experience in real estate, John has led our company to become a trusted name in property solutions.",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Emily Davis",
    role: "Chief Operations Officer",
    image: "/api/placeholder/400/400",
    bio: "Emily brings strategic vision and operational excellence to our team, ensuring smooth and efficient property management.",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Head of Property Acquisitions",
    image: "/api/placeholder/400/400",
    bio: `Michael's keen eye for valuable properties and market trends has been instrumental in our company's growth.`,
    linkedin: "#",
  },
];

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "First-Time Homebuyer",
//     quote:
//       "The team made my dream of owning a home a reality. Their expertise and support were exceptional!",
//     image: "/api/placeholder/400/400",
//   },
//   {
//     id: 2,
//     name: "Robert Garcia",
//     role: "Property Investor",
//     quote:
//       "Incredible market insights and professional guidance. They truly understand real estate investment.",
//     image: "/api/placeholder/400/400",
//   },
// ];

const milestones: Milestone[] = [
  { id: 1, icon: Award, value: 500, label: "Properties Sold", suffix: "+" },
  { id: 2, icon: Globe, value: 15, label: "Years in Business", suffix: "+" },
  { id: 3, icon: Users, value: 250, label: "Happy Clients", suffix: "+" },
  { id: 4, icon: Book, value: 5, label: "Properties Listed", suffix: "K+" },
];

const companyValues: ValueProps[] = [
  {
    id: 1,
    icon: Heart,
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients' needs, providing personalized solutions and exceptional support throughout their real estate journey.",
  },
  {
    id: 2,
    icon: Target,
    title: "Integrity & Transparency",
    description:
      "We believe in honest communication, ethical practices, and complete transparency in all our transactions and interactions.",
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Continuous Innovation",
    description:
      "We constantly evolve our strategies, leverage cutting-edge technology, and adapt to market changes to deliver superior results.",
  },
  {
    id: 4,
    icon: Globe,
    title: "Global Reach",
    description:
      "Our extensive network and partnerships enable us to provide real estate solutions across diverse markets worldwide.",
  },
];

// New data for the sections
// const propertyServices: ServiceOffering[] = [
//   {
//     id: 1,
//     icon: Building,
//     title: "Comprehensive Property Management",
//     description:
//       "End-to-end property management solutions that maximize your investment and minimize your stress.",
//     benefits: [
//       "24/7 Maintenance Support",
//       "Tenant Screening",
//       "Rent Collection",
//       "Regular Property Inspections",
//     ],
//   },
//   {
//     id: 2,
//     icon: HandshakeIcon,
//     title: "Strategic Consultation",
//     description:
//       "Personalized real estate strategies tailored to your unique investment goals.",
//     benefits: [
//       "Market Analysis",
//       "Investment Portfolio Optimization",
//       "Risk Assessment",
//       "Long-term Growth Planning",
//     ],
//   },
//   {
//     id: 3,
//     icon: TrendingUp,
//     title: "Investment Advisory",
//     description:
//       "Advanced insights and recommendations for real estate investment opportunities.",
//     benefits: [
//       "Emerging Market Identification",
//       "ROI Projection",
//       "Diversification Strategies",
//       "Comprehensive Due Diligence",
//     ],
//   },
// ];

// const investmentStrategies: InvestmentStrategy[] = [
//   {
//     id: 1,
//     type: "Residential Rental Properties",
//     description:
//       "Invest in residential properties in high-growth urban areas with strong rental demand.",
//     potentialReturn: "4-8% Annual Rental Yield",
//     riskLevel: "Low",
//   },
//   {
//     id: 2,
//     type: "Commercial Real Estate",
//     description:
//       "Strategic investments in commercial spaces, including office buildings and retail centers.",
//     potentialReturn: "6-12% Annual Return",
//     riskLevel: "Medium",
//   },
//   {
//     id: 3,
//     type: "Development Projects",
//     description:
//       "High-potential investments in upcoming real estate development zones.",
//     potentialReturn: "10-20% Potential Appreciation",
//     riskLevel: "High",
//   },
// ];

// Company Values Component
const CompanyValues: React.FC = () => (
  <section className="bg-white px-8 py-16">
    <div className="container mx-auto px-4">
      <SectionTitle title="Our Core Values" className="mb-12 text-center" />
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {companyValues.map((value) => (
          <div key={value.id} className="text-left">
            <value.icon className="mb-4 h-16 w-16 text-red-600" />
            <h3 className="mb-3 text-xl font-semibold text-slate-800">
              {value.title}
            </h3>
            <p className="text-slate-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Testimonials Component
// const TestimonialSection: React.FC = () => (
//   <section className="bg-slate-100 px-8 py-16">
//     <div className="container mx-auto px-4">
//       <SectionTitle
//         title="What Our Clients Say"
//         className="mb-12 text-center"
//       />
//       <div className="grid gap-8 md:grid-cols-2">
//         {testimonials.map((testimonial) => (
//           <div
//             key={testimonial.id}
//             className="rounded-lg bg-white p-6 shadow-md"
//           >
//             <div className="mb-4 flex items-center">
//               <div className="relative mr-4 h-16 w-16">
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   fill
//                   className="rounded-full object-cover"
//                 />
//               </div>
//               <div>
//                 <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
//                 <p className="text-sm text-slate-600">{testimonial.role}</p>
//               </div>
//             </div>
//             <blockquote className="text-slate-700 italic">
//               "{testimonial.quote}"
//             </blockquote>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // New Section: Investment Strategies
// const InvestmentStrategySection: React.FC = () => (
//   <section className="bg-slate-100 px-8 py-16">
//     <div className="container mx-auto px-4">
//       <SectionTitle
//         title="Investment Strategies Tailored to Your Goals"
//         className="mb-12 text-center"
//       />
//       <div className="grid gap-8 md:grid-cols-3">
//         {investmentStrategies.map((strategy) => (
//           <div
//             key={strategy.id}
//             className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl"
//           >
//             <div className="mb-4 flex items-center">
//               <BriefcaseIcon className="mr-4 h-12 w-12 text-red-600" />
//               <h3 className="text-xl font-semibold text-slate-800">
//                 {strategy.type}
//               </h3>
//             </div>
//             <p className="mb-4 text-slate-600">{strategy.description}</p>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-slate-700">Potential Return:</span>
//                 <span className="font-semibold text-green-600">
//                   {strategy.potentialReturn}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-slate-700">Risk Level:</span>
//                 <span
//                   className={`font-semibold ${
//                     strategy.riskLevel === "Low"
//                       ? "text-green-600"
//                       : strategy.riskLevel === "Medium"
//                         ? "text-yellow-600"
//                         : "text-red-600"
//                   }`}
//                 >
//                   {strategy.riskLevel}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // New Section: Comprehensive Services
// const ComprehensiveServices: React.FC = () => (
//   <section className="bg-white px-8 py-16">
//     <div className="container mx-auto px-4">
//       <SectionTitle
//         title="Our Comprehensive Real Estate Services"
//         className="mb-12 text-center"
//       />
//       <div className="grid gap-8 md:grid-cols-3">
//         {propertyServices.map((service) => (
//           <div
//             key={service.id}
//             className="rounded-lg bg-slate-50 p-6 shadow-md transition-all hover:shadow-xl"
//           >
//             <div className="mb-4 flex items-center">
//               <service.icon className="mr-4 h-12 w-12 text-red-600" />
//               <h3 className="text-xl font-semibold text-slate-800">
//                 {service.title}
//               </h3>
//             </div>
//             <p className="mb-4 text-slate-600">{service.description}</p>
//             <ul className="space-y-2 text-slate-700">
//               {service.benefits.map((benefit, index) => (
//                 <li key={index} className="flex items-center">
//                   <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
//                   {benefit}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

const ServiceShowcaseSection: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Building,
      title: "Property Acquisition",
      description: "Discover premium properties with our expert team.",
      backgrounds: [
        "from-blue-500 to-purple-600",
        "from-green-400 to-teal-500",
        "from-red-500 to-orange-600",
      ],
    },
    {
      icon: TrendingUp,
      title: "Investment Strategy",
      description: "Maximize returns with data-driven investment insights.",
      backgrounds: [
        "from-indigo-500 to-blue-600",
        "from-pink-500 to-rose-600",
        "from-yellow-500 to-amber-600",
      ],
    },
    {
      icon: Target,
      title: "Market Analysis",
      description: "Comprehensive market research and trend prediction.",
      backgrounds: [
        "from-purple-500 to-indigo-600",
        "from-cyan-500 to-blue-600",
        "from-orange-500 to-red-600",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-800">
            Our Specialized Services
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Innovative solutions tailored to your real estate needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative transform cursor-pointer rounded-2xl bg-gradient-to-br p-8 shadow-2xl transition-all duration-300 hover:-translate-y-4 ${
                activeService === index
                  ? service.backgrounds[0]
                  : "from-white to-slate-100"
              } `}
              onMouseEnter={() => setActiveService(index)}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-10 ${service.backgrounds[1]} rounded-2xl`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${
                    activeService === index
                      ? "bg-white text-slate-800"
                      : "bg-slate-100 text-slate-600"
                  } `}
                >
                  <service.icon className="h-10 w-10" />
                </div>

                <h3
                  className={`mb-4 text-center text-2xl font-bold ${activeService === index ? "text-white" : "text-slate-800"} `}
                >
                  {service.title}
                </h3>

                <AnimatePresence>
                  {activeService === index && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="text-center text-white"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          zIndex: 1,
        }}
      ></div>
    </section>
  );
};

// Parallax Journey Section
const JourneySection: React.FC = () => {
  const journeySteps = [
    {
      year: 2010,
      title: "Founding Moment",
      description:
        "Established with a vision to transform real estate experiences.",
      icon: Globe,
    },
    {
      year: 2015,
      title: "Market Expansion",
      description:
        "Pioneered innovative property solutions across major markets.",
      icon: Rocket,
    },
    {
      year: 2020,
      title: "Digital Transformation",
      description:
        "Integrated cutting-edge technology to enhance client services.",
      icon: Target,
    },
    {
      year: 2025,
      title: "Future Vision",
      description:
        "Continuing to redefine real estate with smart, sustainable solutions.",
      icon: Heart,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Our Evolutionary Journey
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 h-full -translate-x-1/2 transform border-2 border-dashed border-slate-700"></div>

          {journeySteps.map((step, index) => (
            <motion.div
              key={step.year}
              className={`mb-16 flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""} `}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`w-1/2 rounded-2xl bg-slate-800 p-8 shadow-2xl ${index % 2 === 0 ? "mr-auto" : "ml-auto"} `}
              >
                <div className="mb-4 flex items-center">
                  <step.icon className="mr-4 h-12 w-12 text-red-500" />
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-300">{step.description}</p>
              </div>

              <div
                className={`absolute left-1/2 flex h-16 w-16 -translate-x-1/2 transform items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white`}
              >
                {step.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main About Us Page Component
const AboutUsPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen space-y-8 text-slate-800">
      {/* Hero Section */}
      <HeroSection
        content={{
          title: "Let us find the perfect property for you",
          subtitle:
            "Dream home ki talash khatam—find your perfect match aaj hi, bina kisi tension ke!",
          tagline: "Your Dream Home",
        }}
        backgroundImage="/commercial-building.jpg"
      />

      {/* Our Impact Section */}
      <section className="mb-8 border bg-white px-8 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <Shield className="mx-auto mb-4 h-16 w-16 text-red-600" />
              <h3 className="mb-3 text-xl font-semibold text-slate-800">
                Trusted Protection
              </h3>
              <p className="text-slate-600">
                Comprehensive property protection and legal support for all our
                clients.
              </p>
            </div>
            <div className="text-center">
              <Rocket className="mx-auto mb-4 h-16 w-16 text-red-600" />
              <h3 className="mb-3 text-xl font-semibold text-slate-800">
                Strategic Growth
              </h3>
              <p className="text-slate-600">
                Innovative strategies to maximize property value and investment
                potential.
              </p>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-16 w-16 text-red-600" />
              <h3 className="mb-3 text-xl font-semibold text-slate-800">
                Local Expertise
              </h3>
              <p className="text-slate-600">
                Deep understanding of local real estate markets and emerging
                trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-slate-100 px-8 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Milestones" className="mb-12 text-center" />
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className="flex flex-row items-center gap-4 text-center"
              >
                <div className="mb-0 flex justify-center lg:mb-0">
                  <milestone.icon className="h-12 w-12 text-red-600" />
                </div>
                <div>
                  <AnimatedCounter
                    end={milestone.value}
                    suffix={milestone.suffix || ""}
                  />
                  <p className="text-slate-700">{milestone.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Showcase section */}
      <ServiceShowcaseSection />

      {/* Journey section */}
      <JourneySection />

      {/* Company Values Section */}
      <CompanyValues />

      {/* Testimonials Section */}
      {/* <TestimonialSection /> */}

      {/* Team Section */}
      <section className="bg-slate-100 px-8 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Meet Our Leadership"
            className="mb-12 text-center"
          />
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                {...member}
                onOpenModal={setSelectedMember}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Team Member Details */}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
      {/* <ComprehensiveServices /> */}
      {/* <InvestmentStrategySection /> */}
      {/* New Visually Appealing Sections */}
    </div>
  );
};

export default AboutUsPage;

// Separate file for AnimatedCounter.tsx
const AnimatedCounter: React.FC<{
  end: number;
  suffix?: string;
  prefix?: string;
}> = ({ end, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState<number>(0);

  React.useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const increment = end / steps;
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + increment;
        return nextCount >= end ? end : nextCount;
      });
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-left">
      <div className="text-4xl font-bold text-red-600">
        {prefix}
        {Math.round(count)}
        {suffix}
      </div>
    </div>
  );
};

// Separate file for TeamMemberCard.tsx
const TeamMemberCard: React.FC<
  TeamMember & {
    onOpenModal: (member: TeamMember) => void;
  }
> = ({ id, name, role, image, bio, linkedin, onOpenModal }) => {
  return (
    <motion.div
      className="group cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-lg"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
      onClick={() => onOpenModal({ id, name, role, image, bio, linkedin })}
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-slate-800">{name}</h3>
        <p className="text-slate-600">{role}</p>
      </div>
    </motion.div>
  );
};

// Separate file for TeamMemberModal.tsx
const TeamMemberModal: React.FC<{
  member: TeamMember;
  onClose: () => void;
}> = ({ member, onClose }) => {
  return (
    <div
      className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-slate-900 p-4"
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-md rounded-lg bg-white px-8 py-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-slate-600 hover:text-slate-900"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex flex-col items-center">
          <div className="relative mb-4 h-48 w-48">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-slate-800">
            {member.name}
          </h3>
          <p className="mb-4 text-red-600">{member.role}</p>
          <p className="mb-4 text-center text-slate-700">{member.bio}</p>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-red-600 hover:text-red-700"
            >
              <Users className="mr-2" /> View LinkedIn Profile
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};
