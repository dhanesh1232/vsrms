import {
  Heart,
  Truck,
  Stethoscope,
  Briefcase,
  Users,
  Layout,
  Info,
  Building,
  PhoneCall,
  LucideIcon,
} from "lucide-react";

export type NavItem = {
  name: string;
  href: string;
  icon: LucideIcon;
  desc: string;
};

export const services: Record<"care" | "transport", NavItem[]> = {
  care: [
    {
      name: "Care Plans",
      href: "/care/plans",
      icon: Stethoscope,
      desc: "Basic, Standard & Premium plans",
    },
    {
      name: "Our Team",
      href: "/care/team",
      icon: Users,
      desc: "Meet our qualified care trackers",
    },
    {
      name: "Enquiry Form",
      href: "/care/enquiry",
      icon: Layout,
      desc: "Start your patient admission",
    },
  ],
  transport: [
    {
      name: "Browse Vehicles",
      href: "/transport/vehicles",
      icon: Truck,
      desc: "Explore our diverse fleet",
    },
    {
      name: "Register Partner",
      href: "/transport/register-partner",
      icon: Briefcase,
      desc: "Join as a vehicle partner",
    },
  ],
};

export const companyLinks: Record<"about" | "contact", NavItem[]> = {
  about: [
    {
      name: "Our Story",
      href: "/about/company",
      icon: Building,
      desc: "Learn about VSRMS mission and vision",
    },
    {
      name: "Care Facilities",
      href: "/about/care",
      icon: Heart,
      desc: "Explore our state-of-the-art care homes",
    },
    {
      name: "Transport Operations",
      href: "/about/transport",
      icon: Truck,
      desc: "How our vehicle fleet operates",
    },
  ],
  contact: [
    {
      name: "General Inquiries",
      href: "/contact/general",
      icon: Info,
      desc: "Get in touch with our corporate team",
    },
    {
      name: "Care Support",
      href: "/contact/care",
      icon: PhoneCall,
      desc: "24/7 medical and patient assistance",
    },
    {
      name: "Partner Support",
      href: "/contact/partner",
      icon: Briefcase,
      desc: "Help with your vehicle operations",
    },
  ],
};
