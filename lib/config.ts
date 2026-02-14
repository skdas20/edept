import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  siteName: "EEE Department - IEM",
  department: "Electronics & Communication Engineering",
  institution: "Institute of Engineering & Management",
  logo: "",
  favicon: "/favicon.ico",
  colors: {
    primary: "#0B3A78",
    secondary: "#F2B705",
    accent: "#F2B705"
  },
  contact: {
    address: "IEM Management Building, D-1, Street No. 13, EP Block, Sector V, Bidhannagar, Kolkata 700091",
    phone: ["+91 33 2357 2969", "+91 33 2357 7649"],
    email: ["eee.iemk@gmail.com"],
    location: {
      lat: 22.5726,
      lng: 88.4324
    }
  },
  social: {
    linkedin: "https://www.linkedin.com/school/iem-kolkata/",
    facebook: "https://www.facebook.com/iemkolkata"
  },
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Vision & Mission", href: "/about" },
        { label: "HOD Message", href: "/about" },
        { label: "Faculty Members", href: "/faculty" },
        { label: "Advisory Board", href: "/about" }
      ]
    },
    {
      label: "Academics",
      href: "/academics",
      children: [
        { label: "Routine", href: "/academics/routine" },
        { label: "Laboratories", href: "/academics/labs" },
        { label: "Syllabus", href: "/academics" },
      ]
    },
    {
      label: "Research",
      href: "/research",
      children: [
        { label: "Publications", href: "/research#publications" },
        { label: "Funded Projects", href: "/research#grants" },
        { label: "Patents", href: "/research#patents" }
      ]
    },
    {
      label: "Events",
      href: "/events",
      children: [
        { label: "Upcoming Events", href: "/events" },
        { label: "Photo Gallery", href: "/gallery" },
        { label: "Professional Chapters", href: "/events" }
      ]
    },
    {
      label: "Student Corner",
      href: "/student-corner",
      children: [
        { label: "Placements", href: "/student-corner" },
        { label: "Achievements", href: "/student-corner" },
        { label: "Resources", href: "/student-corner" },
        { label: "Alumni Network", href: "/alumni" }
      ]
    },
    { label: "Contact", href: "/contact" }
  ]
};
