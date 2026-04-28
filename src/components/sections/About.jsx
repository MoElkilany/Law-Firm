import { colors, fonts } from '../../styles/tokens';
import { FadeIn, GoldLine, SectionLabel } from '../ui';

const strengths = [
  { icon: '⚖', title: 'احترافية عالية', desc: 'نتعامل مع كل قضية بدقة ومهنية تضمن أفضل النتائج الممكنة.' },
  { icon: '🤝', title: 'التزام راسخ', desc: 'نلتزم بالدفاع الكامل عن حقوقك في جميع مراحل التقاضي.' },
  { icon: '🏆', title: 'نتائج مثبتة', desc: 'سجل حافل بالانتصارات في أبرز القضايا على مستوى المحاكم.' },
];

export function About() {
  return (
    <section 
      id="about" 
      style={{ 
        background: '#0D0D0D', 
        padding: '120px 5vw', 
        direction: 'rtl' 
      }}>
      <div style={{ 
        maxWidth: 1200, 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: 80, 
        alignItems: 'center' 
      }}>
        <FadeIn>
          <div style={{ position: 'relative' }}>
            <div style={{ 
              width: '100%', 
              aspectRatio: '4/5', 
              background: colors.darkCard, 
              border: `1px solid ${colors.darkBorder}`, 
              position: 'relative', 
              overflow: 'hidden' 
            }}>
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: `linear-gradient(to bottom, transparent 60%, ${colors.dark}88 100%)` 
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: fonts.display,
                fontSize: 120,
                color: `${colors.gold}15`,
                fontWeight: 700,
              }}>
ع
              </div>
            </div>
            <div style={{ 
              position: 'absolute', 
              bottom: -20, 
              right: -20, 
              width: 120, 
              height: 120, 
              border: `1px solid ${colors.gold}44`, 
              borderRadius: 2 
            }} />
            <div style={{ 
              position: 'absolute', 
              top: -12, 
              left: -12, 
              width: 60, 
              height: 60, 
              border: `1px solid ${colors.gold}55`, 
              borderRadius: 2 
            }} />
            <div style={{ 
              position: 'absolute', 
              bottom: 24, 
              left: -20, 
              background: colors.gold, 
              padding: '16px 20px', 
              textAlign: 'center' 
            }}>
              <p style={{ 
                fontFamily: fonts.display, 
                fontSize: 32, 
                fontWeight: 700, 
                color: colors.dark, 
                lineHeight: 1, 
                margin: 0 
              }}>
                ٣٠
              </p>
              <p style={{ 
                fontFamily: fonts.body, 
                fontSize: 10, 
                color: colors.dark, 
                letterSpacing: '0.1em', 
                margin: 0 
              }}>
                عاماً من الخبرة
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div>
            <SectionLabel text="عن المكتب" />
            <GoldLine />
            <h2 style={{ 
              fontFamily: fonts.display, 
              fontSize: 'clamp(32px, 4vw, 52px)', 
              fontWeight: 700, 
              color: colors.offWhite, 
              lineHeight: 1.2, 
              marginBottom: 20 
            }}>
              أكثر من ثلاثة عقود<br />في خدمة العدالة
            </h2>
            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 15, 
              color: colors.muted, 
              lineHeight: 2, 
              marginBottom: 16 
            }}>
              تأسس مكتب العدالة للمحاماة عام ١٩٩٥ على يد المستشار القانوني أ. عادل العمراني، ليكون منذ ذلك الحين رمزاً للنزاهة والكفاءة في عالم القانون.
            </p>
            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 15, 
              color: colors.muted, 
              lineHeight: 2, 
              marginBottom: 40 
            }}>
              نؤمن بأن كل موكل يستحق تمثيلاً قانونياً متميزاً، لذا نوظّف خبرتنا الواسعة وفريقنا المتخصص لضمان أفضل النتائج في كل قضية.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {strengths.map((item, i) => (
                <FadeIn key={i} delay={200 + i * 100}>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: 44, 
                      height: 44, 
                      border: `1px solid ${colors.gold}44`, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0, 
                      fontSize: 18 
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ 
                        fontFamily: fonts.display, 
                        fontSize: 18, 
                        color: colors.offWhite, 
                        fontWeight: 600, 
                        marginBottom: 4 
                      }}>
                        {item.title}
                      </p>
                      <p style={{ 
                        fontFamily: fonts.body, 
                        fontSize: 13, 
                        color: colors.muted, 
                        lineHeight: 1.7 
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default About;