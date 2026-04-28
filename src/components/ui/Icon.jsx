const iconPaths = {
  scales: 'M12 2L2 7v2h20V7L12 2zM4 9v1h16V9H4zm0 2v8h2v-8H4zm4 0v8h2v-8H8zm4 0v8h2v-8h-2zm4 0v8h2v-8h-2zm4 0v8h2v-8h-2zM2 21h20v2H2v-2z',
  shield: 'M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 2.18l7 3.82v4c0 4.52-3.13 8.69-7 9.82-3.87-1.13-7-5.3-7-9.82V8l7-3.82zm-1 4.82v6h2v-6h-2zm0-3v2h2V6h-2z',
  building: 'M12 2v2H4v18h16V4h-8V2zm2 4h4v4h-4V6zm-6 0h4v4H8V6zm0 6h4v4H8v-4zm6 0h4v4h-4v-4zm-6 6h4v2H8v-2zm6 0h4v2h-4v-2z',
  document: 'M6 2v20h12V8l-6-6H6zm2 2h4v4h4v12H8V4zm6 .5L17.5 8H14V4.5zM10 12v1.5h4V12h-4zm0 3v1.5h4V15h-4zm0 3v1.5h2V18h-2z',
  home: 'M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.5L17.5 10H18v7h-4v-6H10v6H6v-7h.5L12 5.5z',
  family: 'M12 4a2 2 0 110 4 2 2 0 010-4zm4 2a2 2 0 110 4 2 2 0 010-4zm-8 0a2 2 0 110 4 2 2 0 010-4zm4 6c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0 2c3.33 0 6 .67 6 2v0H6c0-1.33 2.67-2 6-2z',
  graduation: 'M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 2.18L19.25 9 12 12.82 4.75 9 12 5.18zM5 12.5v4L12 21l7-4.5v-4L12 16l-7-3.5z',
  bolt: 'M11 2v9h4l-6 11v-9H5l6-11z',
  lock: 'M18 8h-1V6A5 5 0 006 6v2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V10a2 2 0 00-2-2zm-6 9a2 2 0 110-4 2 2 0 010 4zM8 8V6a4 4 0 118 0v2H8z',
  trophy: 'M7 4V2h10v2h3v4c0 1.1-.9 2-2 2h-.37A7.01 7.01 0 0112 14.93V17h3v2H9v-2h3v-2.07A7.01 7.01 0 016.37 10H6c-1.1 0-2-.9-2-2V4h3zm8 2V4H9v2H4v2c0 .55.45 1 1 1h1a5 5 0 0010 0h1c.55 0 1-.45 1-1V6h-3z',
  phone: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.36.03.77-.24 1.01l-2.2 2.2z',
  diamond: 'M12 2L2 9l10 13L22 9L12 2zm0 2.5L18.5 9 12 19.5 5.5 9 12 4.5z',
  handshake: 'M18 6h-2V4H8v2H6v4h2v2h1.17L12 14.83 14.83 12H16v-2h2V6zM8 8V6h8v2H8zm8 2v2h-1.17L12 14.83 9.17 12H8v-2h8zM4 16v2h1v-2H4z M7.5 16l-2 2 1.41 1.41L9.33 17 7.5 16zM19 16v2h1v-2h-1zM16.5 16l1.83 1 2.67-1.41L19.09 14.41 16.5 16z',
  mail: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  mapPin: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z',
  clock: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',
};

export function Icon({ name, size = 20, color = 'currentColor', ...props }) {
  const path = iconPaths[name];
  if (!path) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={path} />
    </svg>
  );
}

export const ICON_NAMES = Object.keys(iconPaths);
export default Icon;