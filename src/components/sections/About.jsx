import { colors, fonts } from '../../styles/tokens';
import { FadeIn, GoldLine, SectionLabel } from '../ui';
import Icon from '../ui/Icon';
import personalImg from '../../assets/personal.jpeg';

const strengths = [
  { icon: 'scales', title: 'احترافية عالية', desc: 'نتعامل مع كل قضية بدقة ومهنية تضمن أفضل النتائج الممكنة.' },
  { icon: 'handshake', title: 'التزام راسخ', desc: 'نلتزم بالدفاع الكامل عن حقوقك في جميع مراحل التقاضي.' },
  { icon: 'trophy', title: 'نتائج مثبتة', desc: 'سجل حافل بالانتصارات في أبرز القضايا على مستوى المحاكم.' },
];

export function About() {
  return (
    <section 
      id="about" 
      style={{ 
        background: 'linear-gradient(180deg, #0F1729 0%, #121D32 50%, #0F1729 100%)', 
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
              border: `1px solid ${colors.navyBorder}`, 
              position: 'relative', 
              overflow: 'hidden' 
            }}>
              <img 
                src={personalImg} 
                alt="المحامي أ/سيد الكيلاني" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  display: 'block' 
                }} 
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: `linear-gradient(to bottom, transparent 40%, ${colors.navy}CC 100%)` 
              }} />
            </div>
            <div style={{ 
              position: 'absolute', 
              bottom: -20, 
              right: -20, 
              width: 120, 
              height: 120, 
              border: `1px solid ${colors.primary}44`, 
              borderRadius: 2 
            }} />
            <div style={{ 
              position: 'absolute', 
              top: -12, 
              left: -12, 
              width: 60, 
              height: 60, 
              border: `1px solid ${colors.primary}55`, 
              borderRadius: 2 
            }} />
            <div style={{ 
              position: 'absolute', 
              bottom: 24, 
              left: -20, 
              background: colors.primary, 
              padding: '16px 20px', 
              textAlign: 'center' 
            }}>
              <p style={{ 
                fontFamily: fonts.display, 
                fontSize: 32, 
                fontWeight: 700, 
                color: colors.navy, 
                lineHeight: 1, 
                margin: 0 
              }}>
                ١٥
              </p>
              <p style={{ 
                fontFamily: fonts.body, 
                fontSize: 10, 
                color: colors.navy, 
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
              color: colors.white, 
              lineHeight: 1.2, 
              marginBottom: 20 
            }}>
              أكثر من عقدين <br />في خدمة العدالة
            </h2>
            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 15, 
              color: colors.silver, 
              lineHeight: 2, 
              marginBottom: 16 
            }}>
              تأسس مكتب العدالة للمحاماة عام ٢٠١٠، علي يد المحامي أ/سيد الكيلاني، ليكون منذ ذلك الحين رمزاً للنزاهة والكفاءة في عالم القانون.
            </p>
            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 15, 
              color: colors.silver, 
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
                      border: `1px solid ${colors.primary}44`, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0
                    }}>
                      <Icon name={item.icon} size={20} color="#D4A84B" />
                    </div>
                    <div>
                      <p style={{ 
                        fontFamily: fonts.display, 
                        fontSize: 18, 
                        color: colors.white, 
                        fontWeight: 600, 
                        marginBottom: 4 
                      }}>
                        {item.title}
                      </p>
                      <p style={{ 
                        fontFamily: fonts.body, 
                        fontSize: 13, 
                        color: colors.silver, 
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