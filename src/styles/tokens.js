export const colors = {
  primary: '#D4A84B',
  primaryLight: '#E8C97A',
  primaryDark: '#B08930',

  navy: '#0F1729',
  navyLight: '#162038',
  navyCard: '#182440',
  navyBorder: '#243356',

  white: '#F0EDE6',
  silver: '#9BAAB8',
  slate: '#6B7A8D',

  accent: '#C75B4A',
  accentSoft: 'rgba(199,91,74,0.12)',

  gradientPrimary: 'linear-gradient(135deg, #D4A84B 0%, #E8C97A 50%, #B08930 100%)',
  gradientDark: 'linear-gradient(180deg, #0F1729 0%, #162038 100%)',
  gradientCard: 'linear-gradient(135deg, #182440 0%, #1E2D50 100%)',
  gradientHero: 'radial-gradient(ellipse at 70% 30%, rgba(212,168,75,0.12) 0%, transparent 60%)',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  section: '120px',
};

export const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
};

export const fonts = {
  display: "'Tajawal', sans-serif",
  body: "'Cairo', sans-serif",
};

export const transitions = {
  fast: '0.2s ease',
  normal: '0.3s ease',
  slow: '0.4s ease',
};

export default { colors, spacing, breakpoints, fonts, transitions };