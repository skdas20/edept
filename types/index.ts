// Core content types
export interface PageContent {
  slug: string;
  title: string;
  description: string;
  content: string;
  lastUpdated: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
}

export interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  description: string;
  content: string;
  category: 'conference' | 'workshop' | 'fdp' | 'seminar' | 'other';
  image?: string;
  venue?: string;
  organizers?: string[];
  participants?: number;
  gallery?: string[];
  attachments?: Array<{
    title: string;
    url: string;
  }>;
}

export interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  email: string;
  phone?: string;
  photo: string;
  qualifications: string[];
  researchInterests: string[];
  biography?: string;
  publications?: string[];
  courses?: string[];
  officeHours?: string;
  personalWebsite?: string;
  googleScholar?: string;
  orcid?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  type: 'journal' | 'conference' | 'book-chapter' | 'patent';
  doi?: string;
  url?: string;
  abstract?: string;
  citations?: number;
  facultyAuthors: string[];
}

export interface Achievement {
  id: string;
  title: string;
  recipient: string;
  recipientType: 'student' | 'faculty';
  date: string;
  category: 'academic' | 'research' | 'sports' | 'cultural' | 'award';
  description: string;
  image?: string;
  certificate?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface SiteConfig {
  siteName: string;
  department: string;
  institution: string;
  logo: string;
  favicon: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  contact: {
    address: string;
    phone: string[];
    email: string[];
    location: {
      lat: number;
      lng: number;
    };
  };
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
  navigation: NavigationItem[];
}
