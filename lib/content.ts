import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Event, FacultyProfile, Publication, Achievement, PageContent, SiteConfig } from '@/types';

const contentDirectory = path.join(process.cwd(), 'content');

// Generic function to read all files from a directory
function getContentFiles(directory: string): string[] {
  const fullPath = path.join(contentDirectory, directory);
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  return fs.readdirSync(fullPath).filter(file => file.endsWith('.md') || file.endsWith('.json'));
}

// Parse markdown file with frontmatter
function parseMarkdownFile<T>(filePath: string): T & { content: string } {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return { ...data, content } as T & { content: string };
}

// Get all events
export function getEvents(): Event[] {
  const files = getContentFiles('events');
  const events = files.map(filename => {
    const filePath = path.join(contentDirectory, 'events', filename);
    const event = parseMarkdownFile<Event>(filePath);
    return {
      ...event,
      id: filename.replace(/\.md$/, ''),
    };
  });
  
  // Sort by date (newest first)
  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get all faculty profiles
export function getFaculty(): FacultyProfile[] {
  const files = getContentFiles('faculty');
  return files.map(filename => {
    const filePath = path.join(contentDirectory, 'faculty', filename);
    const faculty = parseMarkdownFile<FacultyProfile>(filePath);
    return {
      ...faculty,
      id: filename.replace(/\.md$/, ''),
    };
  });
}

// Get all publications
export function getPublications(): Publication[] {
  const filePath = path.join(contentDirectory, 'publications', 'publications.json');
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Get all achievements
export function getAchievements(): Achievement[] {
  const files = getContentFiles('achievements');
  return files.map(filename => {
    const filePath = path.join(contentDirectory, 'achievements', filename);
    const achievement = parseMarkdownFile<Achievement>(filePath);
    return {
      ...achievement,
      id: filename.replace(/\.md$/, ''),
    };
  });
}

// Get page content by slug
export function getPageContent(slug: string): PageContent | null {
  const filePath = path.join(contentDirectory, 'pages', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const page = parseMarkdownFile<PageContent>(filePath);
  return {
    ...page,
    slug,
  };
}

// Get site configuration
export function getSiteConfig(): SiteConfig {
  const filePath = path.join(contentDirectory, 'config', 'site.json');
  if (!fs.existsSync(filePath)) {
    // Return default config if file doesn't exist
    return getDefaultSiteConfig();
  }
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error parsing site.json, using default config:', error);
    return getDefaultSiteConfig();
  }
}

function getDefaultSiteConfig(): SiteConfig {
  return {
    siteName: 'EEE Department',
    department: 'Electronics & Communication Engineering',
    institution: 'Institute of Engineering & Management',
    logo: '/images/logo.png',
    favicon: '/favicon.ico',
    colors: {
      primary: '#0B3A78',
      secondary: '#F2B705',
      accent: '#F2B705',
    },
    contact: {
      address: 'IEM Management Building, D-1, Street No. 13, EP Block, Sector V, Bidhannagar, Kolkata 700091',
      phone: ['+91 33 2357 2969', '+91 33 2357 7649'],
      email: ['eee.iemk@gmail.com'],
      location: {
        lat: 22.5726,
        lng: 88.4324,
      },
    },
    social: {
      linkedin: '#',
      facebook: '#',
    },
    navigation: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Academics', href: '/academics' },
      { label: 'Events', href: '/events' },
      { label: 'Student Corner', href: '/student-corner' },
      { label: 'Awards', href: '/awards' },
      { label: 'Research', href: '/research' },
      { label: 'Contact', href: '/contact' },
    ],
  };
}
