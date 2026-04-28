import { useState } from 'react';
import { colors, fonts, transitions } from '../../styles/tokens';
import { FadeIn, GoldLine, SectionLabel } from '../ui';
import { Input, Textarea } from '../ui/Input';

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: '📞', label: 'الهاتف', text: '+966 55 787 5964' },
    { icon: '✉', label: 'البريد الإلكتروني', text: 'info@adalawfirm.com' },
    { icon: '📍', label: 'العنوان', text: 'ام الحمام - الرياض - المملكة العربية السعودية' },
    { icon: '⏰', label: 'أوقات العمل', text: 'الأحد – الخميس: ٩ص – ٦م' },
  ];

  return (
    <section 
      id="contact" 
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
        gap: 80 
      }}>
        <FadeIn>
          <div>
            <SectionLabel text="تواصل معنا" />
            <GoldLine />
            <h2 style={{ 
              fontFamily: fonts.display, 
              fontSize: 'clamp(28px, 3.5vw, 44px)', 
              fontWeight: 700, 
              color: colors.offWhite, 
              marginBottom: 20 
            }}>
              نحن هنا لمساعدتك
            </h2>
            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 14, 
              color: colors.muted, 
              lineHeight: 2, 
              marginBottom: 40 
            }}>
              سواء كانت قضية عاجلة أو استشارة قانونية، فريقنا جاهز للرد عليك في أسرع وقت ممكن.
            </p>

            {contactInfo.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 24 }}>
                <div style={{ 
                  width: 44, 
                  height: 44, 
                  border: `1px solid ${colors.gold}33`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: 16, 
                  flexShrink: 0 
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ 
                    fontFamily: fonts.body, 
                    fontSize: 11, 
                    color: colors.gold, 
                    letterSpacing: '0.1em', 
                    margin: '0 0 4px' 
                  }}>
                    {item.label}
                  </p>
                  <p style={{ 
                    fontFamily: fonts.body, 
                    fontSize: 14, 
                    color: colors.offWhite 
                  }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div style={{ 
            background: colors.darkCard, 
            border: `1px solid ${colors.darkBorder}`, 
            padding: '40px 36px' 
          }}>
            <p style={{ 
              fontFamily: fonts.display, 
              fontSize: 24, 
              color: colors.offWhite, 
              marginBottom: 28 
            }}>
              أرسل رسالتك
            </p>

            {sent && (
              <div style={{ 
                background: `${colors.gold}22`, 
                border: `1px solid ${colors.gold}55`, 
                padding: '12px 16px', 
                marginBottom: 20 
              }}>
                <p style={{ 
                  fontFamily: fonts.body, 
                  fontSize: 13, 
                  color: colors.gold 
                }}>
                  ✓ تم إرسال رسالتك بنجاح، سنتواصل معك قريباً.
                </p>
              </div>
            )}

            <Input 
              placeholder="الاسم الكامل *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <Input 
              placeholder="رقم الهاتف *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <Textarea 
              placeholder="موضوع الاستشارة أو القضية..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button 
              onClick={handleSubmit}
              style={{ 
                width: '100%', 
                background: colors.gold, 
                color: colors.dark, 
                border: 'none', 
                padding: '16px', 
                fontFamily: fonts.body, 
                fontSize: 14, 
                fontWeight: 700, 
                cursor: 'pointer', 
                letterSpacing: '0.06em', 
                transition: transitions.normal 
              }}
              onMouseEnter={(e) => e.target.style.background = colors.goldLight}
              onMouseLeave={(e) => e.target.style.background = colors.gold}
            >
              إرسال الرسالة
            </button>

            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 11, 
              color: colors.muted, 
              textAlign: 'center', 
              marginTop: 16, 
              lineHeight: 1.8 
            }}>
              🔒 جميع بياناتك محمية ومحفوظة بسرية تامة
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Contact;