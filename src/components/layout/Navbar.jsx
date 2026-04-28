import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import { colors, fonts, transitions } from '../../styles/tokens';

const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'عن المكتب', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why' },
  { label: 'آراء العملاء', href: '#testimonials' },
  { label: 'تواصل معنا', href: '#contact' },
];

export function Navbar() {
  const scrolled = useNavbarScroll(50);
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: scrolled ? 'rgba(15,23,41,0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? `1px solid ${colors.navyBorder}` : 'none',
    transition: transitions.slow,
    padding: '0 5vw',
  };

  return (
    <nav style={navStyle}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        height: 72,
        direction: 'rtl'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ 
            width: 36, 
            height: 36, 
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
              fontSize: 14, 
              fontWeight: 700 
            }}>
              ع
            </span>
          </div>
          <div>
            <p style={{ 
              color: colors.white, 
              fontFamily: fonts.display, 
              fontSize: 18, 
              fontWeight: 700, 
              margin: 0, 
              lineHeight: 1 
            }}>
              مكتب العدالة
            </p>
            <p style={{ 
              color: colors.primary, 
              fontSize: 9, 
              letterSpacing: '0.2em', 
              margin: 0, 
              textTransform: 'uppercase' 
            }}>
              للمحاماة والاستشارات
            </p>
          </div>
        </Link>

        <div style={{ display: 'flex', gap: 28 }} className="desktop-nav">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href}
              style={{ 
                color: colors.silver, 
                fontSize: 13, 
                textDecoration: 'none', 
                fontFamily: fonts.body, 
                transition: transitions.fast,
                letterSpacing: '0.02em'
              }}
              onMouseEnter={(e) => e.target.style.color = colors.primary}
              onMouseLeave={(e) => e.target.style.color = colors.silver}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a 
          href="#contact"
          style={{ 
            background: 'transparent', 
            border: `1px solid ${colors.primary}`, 
            color: colors.primary, 
            padding: '8px 20px', 
            fontSize: 12, 
            fontFamily: fonts.body, 
            textDecoration: 'none', 
            letterSpacing: '0.08em', 
            transition: transitions.normal
          }}
          onMouseEnter={(e) => { e.target.style.background = colors.primary; e.target.style.color = colors.navy; }}
          onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = colors.primary; }}
        >
          احجز استشارة
        </a>
      </div>
    </nav>
  );
}

export default Navbar;