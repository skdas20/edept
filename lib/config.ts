import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  siteName: "ECE Department - IEM",
  department: "Electronics & Communication Engineering",
  institution: "Institute of Engineering & Management",
  logo: "/images/new.png",
  favicon: "/favicon.ico",
  colors: {
    primary: "#0F2B59",
    secondary: "#C89A2B",
    accent: "#C89A2B"
  },
  contact: {
    address: "Gurukul, Y-12, Block-EP, Sector-V, Salt Lake Electronics Complex, Kolkata - 700091, West Bengal, India",
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
    {
      label: "Home",
      href: "/",
      children: [
        { label: "Accreditation", href: "/home/accreditation" },
        { label: "Advisory Board", href: "/home/advisory-board" },
        { label: "Academic Disciplinary Committee", href: "/home/adc" },
        { label: "Career Guidance Cell", href: "/home/cgc" },
        { label: "PO PSO & PEO", href: "/home/po-pso-peo" },
        { label: "Engineer's Pledge", href: "/home/engineers-pledge" },
        { label: "Notice", href: "/home/notice" },
        { label: "Academic Calendar", href: "/home/academic-calendar" },
        { label: "List of Holidays", href: "/home/holidays" },
        { label: "Admission", href: "/home/admission" }
      ]
    },
    { label: "Faculty Members", href: "/faculty" },
    {
      label: "Course & Curriculum",
      href: "/academics",
      children: [
        { label: "Infrastructure", href: "/academics/infrastructure" },
        { label: "Library", href: "/academics/library" }
      ]
    },
    {
      label: "Events",
      href: "/events",
      children: [
        { label: "Conference", href: "/events/conference" },
        { label: "Seminars and Lectures", href: "/events/seminars" },
        { label: "Faculty Development Program", href: "/events/fdp" },
        { label: "Workshops", href: "/events/workshops" },
        { label: "Event Reports", href: "/events/event-reports" },
        { label: "Newsletter", href: "/events/newsletter" },
        { label: "Magazine", href: "/events/magazine" },
        { label: "NSS & CSR Activity", href: "/events/nss-csr" },
        { label: "Outreach Activity", href: "/events/outreach" }
      ]
    },
    {
      label: "Student's Corner",
      href: "/student-corner",
      children: [
        { label: "Placement", href: "/student-corner/placement" },
        { label: "Academic ERP", href: "/student-corner/academic-erp" },
        { label: "Student Scholarship", href: "/student-corner/scholarship" },
        { label: "CGC", href: "/student-corner/cgc" },
        { label: "ADC", href: "/student-corner/adc" },
        { label: "Alumni", href: "/alumni" },
        { label: "Benefits", href: "/student-corner/benefits" },
        { label: "Batch Photography", href: "/student-corner/batch-photography" },
        { label: "Tech-Fest", href: "/student-corner/tech-fest" },
        { label: "Student's Achievement", href: "/student-corner/achievements" },
        { label: "Student Branch Chapter", href: "/student-corner/student-branch" },
        { label: "Industrial Visit", href: "/student-corner/industrial-visit" },
        { label: "MatLab Campus License", href: "/student-corner/matlab-license" },
        { label: "Photo Gallery", href: "/gallery" },
        { label: "Extra Curricular Activity", href: "/student-corner/extra-curricular" }
      ]
    },
    {
      label: "Research",
      href: "/research",
      children: [
        { label: "IEDC-ECE", href: "/research/iedc-ece" },
        { label: "AMRL Facility", href: "/research/amrl" },
        { label: "IoT Research Lab", href: "/research/iot-lab" },
        { label: "Publications", href: "/research/publications" },
        { label: "Patent", href: "/research/patents" },
        { label: "MoU", href: "/research/mou" },
        { label: "Departmental Journal", href: "/research/journal" }
      ]
    },
    { label: "Feedback", href: "/feedback" },
    { label: "Calendar", href: "/calendar" },
    {
      label: "More",
      href: "#",
      children: [
        { label: "Contact Us", href: "/contact" },
        { label: "Innovative Teaching Learning (ITL)", href: "/itl" },
        { label: "Alumni", href: "/alumni" },
        { label: "Gallery", href: "/gallery" }
      ]
    }
  ]
};
