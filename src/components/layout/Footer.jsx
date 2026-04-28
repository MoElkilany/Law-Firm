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
      background: 'linear-gradient(180deg, #0C1220 0%, #0F1826 50%, #0A0F18 100%)', 
      borderTop: `1px solid ${colors.navyBorder}`, 
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
                border: `1.5px solid ${colors.primary}`, 
                transform: 'rotate(45deg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <span style={{ 
                  transform: 'rotate(-45deg)', 
                  fontFamily: fonts.display, 
                  color: colors.primary, 
                  fontSize: 12, 
                  fontWeight: 700 
                }}>
                  ع
                </span>
              </div>
              <p style={{ 
                fontFamily: fonts.display, 
                fontSize: 18, 
                color: colors.white, 
                fontWeight: 700 
              }}>
                مكتب العدالة للمحاماة
              </p>
            </div>
            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 13, 
              color: colors.silver, 
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
                    border: `1px solid ${colors.navyBorder}`, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: colors.silver, 
                    textDecoration: 'none', 
                    fontSize: 13, 
                    transition: 'all 0.2s' 
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors.primary; e.currentTarget.style.color = colors.primary; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.navyBorder; e.currentTarget.style.color = colors.silver; }}
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
              color: colors.white, 
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
                  color: colors.silver, 
                  textDecoration: 'none', 
                  marginBottom: 10,
                  transition: 'color 0.2s' 
                }}
                onMouseEnter={(e) => e.target.style.color = colors.primary}
                onMouseLeave={(e) => e.target.style.color = colors.silver}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <p style={{ 
              fontFamily: fonts.display, 
              fontSize: 16, 
              color: colors.white, 
              marginBottom: 20, 
              fontWeight: 600 
            }}>
              تواصل سريع
            </p>
            {contactInfo.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
                <span style={{ fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16 }}><Icon name={item.icon} size={14} color="#9BAAB8" /></span>
                <span style={{ fontFamily: fonts.body, fontSize: 12, color: colors.silver, lineHeight: 1.6 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          borderTop: `1px solid ${colors.navyBorder}`, 
          paddingTop: 24, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: 12 
        }}>
          <p style={{ fontFamily: fonts.body, fontSize: 12, color: colors.silver }}>
            © {currentYear} مكتب العدالة للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
          </p>
          <p style={{ fontFamily: fonts.body, fontSize: 12, color: `${colors.silver}88` }}>
            سياسة الخصوصية · الشروط والأحكام
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;