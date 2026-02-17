// Design System Theme Configuration
export const theme = {
  colors: {
    // Core colors
    background: '#F4F7FB',
    surface: '#FFFFFF',
    surface2: '#EEF3F9',
    text: '#0F172A',
    mutedText: '#4B5565',
    border: '#D7E0EC',
    
    // Brand colors
    primary: '#0F2B59',
    primary600: '#0C2247',
    primary50: '#E8EFFC',
    
    // Accent colors
    accent: '#C89A2B',
    accent600: '#A97F20',
    accent50: '#FAF2DF',
    
    // Status colors
    success: '#16A34A',
    warning: '#F59E0B',
    danger: '#DC2626',
    info: '#2563EB',
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    base: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  
  radius: {
    card: '16px',
    pill: '999px',
    input: '12px',
  },
  
  shadows: {
    sm: '0 1px 2px rgba(15, 23, 42, 0.06)',
    md: '0 6px 18px rgba(15, 23, 42, 0.10)',
    lg: '0 12px 28px rgba(15, 23, 42, 0.12)',
  },
  
  typography: {
    fontFamily: {
      sans: ['Manrope', 'system-ui', 'sans-serif'],
      heading: ['Sora', 'Manrope', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      h1: '44px',
      h1Desktop: '56px',
      h2: '32px',
      h2Desktop: '40px',
      h3: '22px',
      h3Desktop: '28px',
      body: '16px',
      bodyLarge: '18px',
      small: '13px',
      tiny: '12px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.1,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  
  maxWidth: {
    content: '1200px',
    paragraph: '75ch',
  },
} as const;

export type Theme = typeof theme;
