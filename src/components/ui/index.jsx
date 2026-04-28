import { useFadeIn } from '../../hooks/useFadeIn';
import { colors, fonts } from '../../styles/tokens';

export function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, visible } = useFadeIn();
  
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function GoldLine() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 12, 
      margin: '0 auto 40px', 
      maxWidth: 160 
    }}>
      <div style={{ 
        flex: 1, 
        height: 1, 
        background: `linear-gradient(to right, transparent, ${colors.gold})` 
      }} />
      <div style={{ 
        width: 6, 
        height: 6, 
        background: colors.gold, 
        transform: 'rotate(45deg)' 
      }} />
      <div style={{ 
        flex: 1, 
        height: 1, 
        background: `linear-gradient(to left, transparent, ${colors.gold})` 
      }} />
    </div>
  );
}

export function SectionLabel({ text }) {
  return (
    <p style={{ 
      fontFamily: fonts.display, 
      letterSpacing: '0.35em', 
      fontSize: 11, 
      color: colors.gold, 
      textTransform: 'uppercase', 
      textAlign: 'center', 
      marginBottom: 16 
    }}>
      {text}
    </p>
  );
}

export default { FadeIn, GoldLine, SectionLabel };