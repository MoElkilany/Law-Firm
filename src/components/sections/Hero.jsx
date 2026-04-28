import { Link } from 'react-router-dom';
import { colors, fonts } from '../../styles/tokens';
import { FadeIn } from '../ui';

export function Hero() {
  const stats = [
    { number: '١٥+', label: 'سنة خبرة' },
    { number: '٥٠٠+', label: 'قضية ناجحة' },
    { number: '٩٥٪', label: 'نسبة الفوز' },
    { number: '٤٨ ساعة', label: 'وقت الرد' },
  ];

  return (
    <section 
      id="hero" 
      style={{ 
        minHeight: '100vh', 
        background: `linear-gradient(180deg, #0F1729 0%, #131E35 40%, #0F1729 100%)`, 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden' 
      }}>
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: `linear-gradient(${colors.navyBorder} 1px, transparent 1px), linear-gradient(90deg, ${colors.navyBorder} 1px, transparent 1px)`, 
        backgroundSize: '60px 60px', 
        opacity: 0.4 
      }} />
      <div style={{ 
        position: 'absolute', 
        top: '15%', 
        right: '8%', 
        width: 300, 
        height: 300, 
        border: `1px solid ${colors.primary}22`, 
        transform: 'rotate(45deg)', 
        borderRadius: 2 
      }} />
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        right: '10%', 
        width: 220, 
        height: 220, 
        border: `1px solid ${colors.primary}33`, 
        transform: 'rotate(45deg)', 
        borderRadius: 2 
      }} />
      <div style={{ 
        position: 'absolute', 
        bottom: '10%', 
        left: '5%', 
        width: 180, 
        height: 180, 
        border: `1px solid ${colors.primary}22`, 
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
        direction: 'rtl',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div>
          <FadeIn>
            <p style={{ 
              color: colors.primary, 
              fontFamily: fonts.display, 
              letterSpacing: '0.4em', 
              fontSize: 11, 
              textTransform: 'uppercase', 
              marginBottom: 24, 
              opacity: 0.9 
            }}>
              مكتب محاماة متخصص منذ ٢٠١٠
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 style={{ 
              fontFamily: fonts.display, 
              fontSize: 'clamp(44px, 7vw, 88px)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              color: colors.white, 
              margin: '0 0 24px' 
            }}>
              العدالة تبدأ<br />
              <span style={{ color: colors.primary }}>باختيار المحامي</span><br />
              الصحيح
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 17, 
              color: colors.silver, 
              lineHeight: 1.9, 
              marginBottom: 48, 
              maxWidth: 580,
              margin: '0 auto 48px auto',
            }}>
              خبرة قانونية تمتد لأكثر من ١٥ عاماً في الدفاع عن حقوق عملائنا بمهنية عالية وسرية تامة وتحقيق النتائج.
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a 
                href="#contact"
                style={{ 
                  background: colors.primary, 
                  color: colors.navy, 
                  padding: '16px 36px', 
                  fontFamily: fonts.body, 
                  fontSize: 14, 
                  fontWeight: 700, 
                  textDecoration: 'none', 
                  letterSpacing: '0.06em', 
                  transition: 'all 0.3s' 
                }}
                onMouseEnter={(e) => e.target.style.background = colors.primaryLight}
                onMouseLeave={(e) => e.target.style.background = colors.primary}
              >
                احجز استشارة مجانية
              </a>
              <a 
                href="#services"
                style={{ 
                  background: 'transparent', 
                  border: `1px solid ${colors.silver}55`, 
                  color: colors.white, 
                  padding: '16px 36px', 
                  fontFamily: fonts.body, 
                  fontSize: 14, 
                  textDecoration: 'none', 
                  letterSpacing: '0.06em', 
                  transition: 'all 0.3s' 
                }}
                onMouseEnter={(e) => { e.target.style.borderColor = colors.primary; e.target.style.color = colors.primary; }}
                onMouseLeave={(e) => { e.target.style.borderColor = `${colors.silver}55`; e.target.style.color = colors.white; }}
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
            borderTop: `1px solid ${colors.navyBorder}`, 
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ direction: 'rtl', textAlign: 'center' }}>
                <p style={{ 
                  fontFamily: fonts.display, 
                  fontSize: 36, 
                  fontWeight: 700, 
                  color: colors.primary, 
                  margin: 0, 
                  lineHeight: 1 
                }}>
                  {stat.number}
                </p>
                <p style={{ 
                  fontFamily: fonts.body, 
                  fontSize: 12, 
                  color: colors.silver, 
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