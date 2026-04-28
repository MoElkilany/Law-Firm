import { Link } from 'react-router-dom';
import { colors, fonts } from '../../styles/tokens';
import { FadeIn } from '../ui';

export function Hero() {
  const stats = [
    { number: '٣٠+', label: 'سنة خبرة' },
    { number: '١٢٠٠+', label: 'قضية ناجحة' },
    { number: '٩٨٪', label: 'نسبة الفوز' },
    { number: '٤٨ ساعة', label: 'وقت الرد' },
  ];

  return (
    <section 
      id="hero" 
      style={{ 
        minHeight: '100vh', 
        background: colors.dark, 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden' 
      }}>
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: `linear-gradient(${colors.darkBorder} 1px, transparent 1px), linear-gradient(90deg, ${colors.darkBorder} 1px, transparent 1px)`, 
        backgroundSize: '60px 60px', 
        opacity: 0.4 
      }} />
      <div style={{ 
        position: 'absolute', 
        top: '15%', 
        right: '8%', 
        width: 300, 
        height: 300, 
        border: `1px solid ${colors.gold}22`, 
        transform: 'rotate(45deg)', 
        borderRadius: 2 
      }} />
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        right: '10%', 
        width: 220, 
        height: 220, 
        border: `1px solid ${colors.gold}33`, 
        transform: 'rotate(45deg)', 
        borderRadius: 2 
      }} />
      <div style={{ 
        position: 'absolute', 
        bottom: '10%', 
        left: '5%', 
        width: 180, 
        height: 180, 
        border: `1px solid ${colors.gold}22`, 
        transform: 'rotate(45deg)', 
        borderRadius: 2 
      }} />

      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        width: '100%', 
        maxWidth: 1200, 
        margin: '0 auto', 
        padding: '120px 5vw 80px', 
        direction: 'rtl' 
      }}>
        <div style={{ maxWidth: 680 }}>
          <FadeIn>
            <p style={{ 
              color: colors.gold, 
              fontFamily: fonts.display, 
              letterSpacing: '0.4em', 
              fontSize: 11, 
              textTransform: 'uppercase', 
              marginBottom: 24, 
              opacity: 0.9 
            }}>
              مكتب محاماة متخصص منذ ١٩٩٥
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 style={{ 
              fontFamily: fonts.display, 
              fontSize: 'clamp(44px, 7vw, 88px)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              color: colors.offWhite, 
              margin: '0 0 24px' 
            }}>
              العدالة تبدأ<br />
              <span style={{ color: colors.gold }}>باختيار المحامي</span><br />
              الصحيح
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 17, 
              color: colors.muted, 
              lineHeight: 1.9, 
              marginBottom: 48, 
              maxWidth: 520 
            }}>
              خبرة قانونية تمتد لأكثر من ٣٠ عاماً في الدفاع عن حقوق عملائنا بمهنية عالية وسرية تامة وتحقيق النتائج.
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a 
                href="#contact"
                style={{ 
                  background: colors.gold, 
                  color: colors.dark, 
                  padding: '16px 36px', 
                  fontFamily: fonts.body, 
                  fontSize: 14, 
                  fontWeight: 700, 
                  textDecoration: 'none', 
                  letterSpacing: '0.06em', 
                  transition: 'all 0.3s' 
                }}
                onMouseEnter={(e) => e.target.style.background = colors.goldLight}
                onMouseLeave={(e) => e.target.style.background = colors.gold}
              >
                احجز استشارة مجانية
              </a>
              <a 
                href="#services"
                style={{ 
                  background: 'transparent', 
                  border: `1px solid ${colors.muted}55`, 
                  color: colors.offWhite, 
                  padding: '16px 36px', 
                  fontFamily: fonts.body, 
                  fontSize: 14, 
                  textDecoration: 'none', 
                  letterSpacing: '0.06em', 
                  transition: 'all 0.3s' 
                }}
                onMouseEnter={(e) => { e.target.style.borderColor = colors.gold; e.target.style.color = colors.gold; }}
                onMouseLeave={(e) => { e.target.style.borderColor = `${colors.muted}55`; e.target.style.color = colors.offWhite; }}
              >
                تعرّف على خدماتنا
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={800}>
          <div style={{ 
            display: 'flex', 
            gap: 48, 
            marginTop: 80, 
            paddingTop: 40, 
            borderTop: `1px solid ${colors.darkBorder}`, 
            flexWrap: 'wrap' 
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ direction: 'rtl' }}>
                <p style={{ 
                  fontFamily: fonts.display, 
                  fontSize: 36, 
                  fontWeight: 700, 
                  color: colors.gold, 
                  margin: 0, 
                  lineHeight: 1 
                }}>
                  {stat.number}
                </p>
                <p style={{ 
                  fontFamily: fonts.body, 
                  fontSize: 12, 
                  color: colors.muted, 
                  margin: '4px 0 0', 
                  letterSpacing: '0.06em' 
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;