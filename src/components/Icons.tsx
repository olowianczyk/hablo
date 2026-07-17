type IconProps = { size?: number; color?: string; strokeWidth?: number };

const base = (size = 20, strokeWidth = 1.9) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export function IconHome({ size, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
    </svg>
  );
}
export function IconLevels({ size, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}
export function IconVocab({ size, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M12 4v16" />
    </svg>
  );
}
export function IconPhrases({ size, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M4 5h16v11H9l-5 4V5z" />
    </svg>
  );
}
export function IconListen({ size, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M4 14v-1a8 8 0 0116 0v1" />
      <rect x="3" y="13" width="4.5" height="7" rx="2" />
      <rect x="16.5" y="13" width="4.5" height="7" rx="2" />
    </svg>
  );
}
export function IconBuilder({ size, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </svg>
  );
}
export function IconPron({ size, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0014 0" />
      <path d="M12 18v3" />
    </svg>
  );
}
export function IconReview({ size, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M4 12a8 8 0 0113.7-5.6L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 01-13.7 5.6L4 16" />
      <path d="M4 20v-4h4" />
    </svg>
  );
}
export function IconStats({ size, color }: IconProps) {
  return (
    <svg {...base(size)} style={{ color }}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M4 20h16" />
    </svg>
  );
}
export function IconSpeaker({ size, color, strokeWidth }: IconProps) {
  return (
    <svg {...base(size, strokeWidth ?? 2)} style={{ color }}>
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 010 7" />
    </svg>
  );
}
export function IconSpeakerLoud({ size, color }: IconProps) {
  return (
    <svg {...base(size, 2)} style={{ color }}>
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 010 7" />
      <path d="M19 5a9 9 0 010 14" />
    </svg>
  );
}
export function IconMic({ size, color }: IconProps) {
  return (
    <svg {...base(size, 2)} stroke="#fff" style={{ color }}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0014 0" />
      <path d="M12 18v3" />
    </svg>
  );
}
export function IconCheckmark({ size = 13, color = '#fff' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
export function IconLock({ size = 12, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color }} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </svg>
  );
}
export function IconChevronRight({ size = 20, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color }} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
export function IconArrowRight({ size = 18, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color }} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
export function IconSun({ size = 18, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color }} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19" />
    </svg>
  );
}
export function IconMoon({ size = 18, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ fill: color || 'currentColor' }}>
      <path d="M20 14a8 8 0 01-9.9-9.9A8 8 0 1020 14z" />
    </svg>
  );
}
export function IconPlay({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
export function IconGlobe({ size = 15, color }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color }} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18" />
      <path d="M14 5l7 7-7 7" />
    </svg>
  );
}
