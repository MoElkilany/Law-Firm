import { colors, fonts } from '../../styles/tokens';
import { FadeIn, GoldLine, SectionLabel } from '../ui';

export function CTA() {
  return (
    <section 
      style={{ 
        background: `linear-gradient(135deg, ${colors.primaryDark}22 0%, ${colors.navy} 50%, ${colors.primaryDark}11 100%)`, 
        borderTop: `1px solid ${colors.primary}33`, 
        borderBottom: `1px solid ${colors.primary}33`, 
        padding: '100px 5vw', 
        textAlign: 'center', 
        direction: 'rtl', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%,-50%)', 
        width: 600, 
        height: 600, 
        border: `1px solid ${colors.primary}11`, 
        borderRadius: '50%' 
      }} />
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%,-50%)', 
        width: 400, 
        height: 400, 
        border: `1px solid ${colors.primary}15`, 
        borderRadius: '50%' 
      }} />

      <FadeIn>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ 
            fontFamily: fonts.display, 
            letterSpacing: '0.35em', 
            fontSize: 11, 
            color: colors.primary, 
            textTransform: 'uppercase', 
            marginBottom: 16 
          }}>
            ابدأ الآن
          </p>
          <h2 style={{ 
            fontFamily: fonts.display, 
            fontSize: 'clamp(36px, 5vw, 64px)', 
            fontWeight: 700, 
            color: colors.white, 
            marginBottom: 20, 
            lineHeight: 1.2 
          }}>
            قضيتك تستحق<br />
            <span style={{ color: colors.primary }}>أفضل دفاع ممكن</span>
          </h2>
          <p style={{ 
            fontFamily: fonts.body, 
            fontSize: 16, 
            color: colors.silver, 
            maxWidth: 480, 
            margin: '0 auto 40px', 
            lineHeight: 1.9 
          }}>
            الاستشارة الأولى مجانية. تواصل معنا اليوم ودعنا نقيّم وضعك القانوني بسرية تامة.
          </p>
          <a 
            href="#contact" 
            style={{ 
              display: 'inline-block', 
              background: colors.primary, 
              color: colors.navy, 
              padding: '18px 52px', 
              fontFamily: fonts.body, 
              fontSize: 15, 
              fontWeight: 700, 
              textDecoration: 'none', 
              letterSpacing: '0.06em', 
              transition: 'all 0.3s' 
            }}
            onMouseEnter={(e) => { e.target.style.background = colors.primaryLight; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.target.style.background = colors.primary; e.target.style.transform = 'translateY(0)'; }}
          >
            احجز استشارتك المجانية الآن
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

export default CTA;