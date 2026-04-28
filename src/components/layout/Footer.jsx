import { Link } from 'react-router-dom';
import { colors, fonts } from '../../styles/tokens';
import Icon from '../ui/Icon';

const footerLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عن المكتب', href: '#about' },
  { label: 'الخدمات', href: '#services' },
  { label: 'لماذا نحن', href: '#why' },
  { label: 'آراء العملاء', href: '#testimonials' },
  { label: 'تواصل معنا', href: '#contact' },
];

const contactInfo = [
  { icon: 'phone', text: '+966 55 787 5964' },
  { icon: 'mail', text: 'info@adalawfirm.com' },
  { icon: 'mapPin', text: 'ام الحمام - الرياض - المملكة العربية السعودية' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      background: '#080808', 
      borderTop: `1px solid ${colors.darkBorder}`, 
      padding: '60px 5vw 32px', 
      direction: 'rtl' 
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr 1fr', 
          gap: 48, 
          marginBottom: 48 
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ 
                width: 32, 
                height: 32, 
                border: `1.5px solid ${colors.gold}`, 
                transform: 'rotate(45deg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <span style={{ 
                  transform: 'rotate(-45deg)', 
                  fontFamily: fonts.display, 
                  color: colors.gold, 
                  fontSize: 12, 
                  fontWeight: 700 
                }}>
                  ع
                </span>
              </div>
              <p style={{ 
                fontFamily: fonts.display, 
                fontSize: 18, 
                color: colors.offWhite, 
                fontWeight: 700 
              }}>
                مكتب العدالة للمحاماة
              </p>
            </div>
            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 13, 
              color: colors.muted, 
              lineHeight: 1.9, 
              maxWidth: 280 
            }}>
              نمثّل العدالة بخبرة وشغف منذ ٢٠١٠. التزامنا بعملائنا لا حدود له.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {['𝕏', 'in', 'f', '📱'].map((s, i) => (
                <a 
                  key={i} 
                  href="#"
                  style={{ 
                    width: 36, 
                    height: 36, 
                    border: `1px solid ${colors.darkBorder}`, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: colors.muted, 
                    textDecoration: 'none', 
                    fontSize: 13, 
                    transition: 'all 0.2s' 
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.gold; e.currentTarget.style.color = colors.gold; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.darkBorder; e.currentTarget.style.color = colors.muted; }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ 
              fontFamily: fonts.display, 
              fontSize: 16, 
              color: colors.offWhite, 
              marginBottom: 20, 
              fontWeight: 600 
            }}>
              روابط سريعة
            </p>
            {footerLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href}
                style={{ 
                  display: 'block', 
                  fontFamily: fonts.body, 
                  fontSize: 13, 
                  color: colors.muted, 
                  textDecoration: 'none', 
                  marginBottom: 10,
                  transition: 'color 0.2s' 
                }}
                onMouseEnter={(e) => e.target.style.color = colors.gold}
                onMouseLeave={(e) => e.target.style.color = colors.muted}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <p style={{ 
              fontFamily: fonts.display, 
              fontSize: 16, 
              color: colors.offWhite, 
              marginBottom: 20, 
              fontWeight: 600 
            }}>
              تواصل سريع
            </p>
            {contactInfo.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
                <span style={{ fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16 }}><Icon name={item.icon} size={14} color="#888880" /></span>
                <span style={{ fontFamily: fonts.body, fontSize: 12, color: colors.muted, lineHeight: 1.6 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          borderTop: `1px solid ${colors.darkBorder}`, 
          paddingTop: 24, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: 12 
        }}>
          <p style={{ fontFamily: fonts.body, fontSize: 12, color: colors.muted }}>
            © {currentYear} مكتب العدالة للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
          </p>
          <p style={{ fontFamily: fonts.body, fontSize: 12, color: `${colors.muted}88` }}>
            سياسة الخصوصية · الشروط والأحكام
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;