import { useState } from 'react';
import { colors, fonts } from '../../styles/tokens';
import { FadeIn, GoldLine, SectionLabel } from '../ui';

const services = [
  { icon: '📋', title: 'القضايا المدنية', desc: 'تمثيل قانوني متكامل في الدعاوى المدنية، التعويضات، والنزاعات التجارية والشخصية.' },
  { icon: '⚖', title: 'القضايا الجنائية', desc: 'دفاع قوي وصارم في قضايا الجنايات والجنح مع ضمان جميع حقوق الدفاع القانوني.' },
  { icon: '🏢', title: 'قانون الشركات', desc: 'تأسيس الشركات، وصياغة العقود التجارية، وتسوية النزاعات بين الشركاء.' },
  { icon: '📝', title: 'صياغة العقود', desc: 'صياغة ومراجعة العقود القانونية بأعلى معايير الدقة لحماية مصالحك.' },
  { icon: '🏠', title: 'العقارات والإيجارات', desc: 'تسوية النزاعات العقارية، توثيق عقود البيع والإيجار والتحكيم.' },
  { icon: '👨‍👩‍👧', title: 'الأحوال الشخصية', desc: 'قضايا الأسرة، الطلاق، الحضانة، والميراث بتعامل إنساني وحكيم.' },
];

export function Services() {
  return (
    <section 
      id="services" 
      style={{ 
        background: colors.dark, 
        padding: '120px 5vw', 
        direction: 'rtl' 
      }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <SectionLabel text="خدماتنا القانونية" />
            <GoldLine />
            <h2 style={{ 
              fontFamily: fonts.display, 
              fontSize: 'clamp(32px, 4vw, 52px)', 
              fontWeight: 700, 
              color: colors.offWhite, 
              marginBottom: 16 
            }}>
              تخصص قانوني شامل
            </h2>
            <p style={{ 
              fontFamily: fonts.body, 
              fontSize: 15, 
              color: colors.muted, 
              maxWidth: 500, 
              margin: '0 auto' 
            }}>
              نقدم طيفاً واسعاً من الخدمات القانونية المتخصصة لأفراد وشركات بكفاءة وسرية تامة.
            </p>
          </div>
        </FadeIn>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: 2 
        }}>
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 80}>
              <ServiceCard service={service} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ 
        background: colors.darkCard, 
        border: `1px solid ${hovered ? `${colors.gold}55` : colors.darkBorder}`, 
        padding: '40px 32px', 
        cursor: 'default', 
        transition: 'all 0.35s', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: 3, 
        height: hovered ? '100%' : 0, 
        background: colors.gold, 
        transition: 'height 0.35s' 
      }} />
      <div style={{ 
        width: 52, 
        height: 52, 
        border: `1px solid ${hovered ? colors.gold : `${colors.gold}33`}`, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontSize: 22, 
        color: hovered ? colors.gold : `${colors.gold}88`, 
        marginBottom: 20, 
        transition: 'all 0.3s' 
      }}>
        {service.icon}
      </div>
      <p style={{ 
        fontFamily: fonts.display, 
        fontSize: 22, 
        fontWeight: 700, 
        color: colors.offWhite, 
        marginBottom: 12 
      }}>
        {service.title}
      </p>
      <p style={{ 
        fontFamily: fonts.body, 
        fontSize: 13, 
        color: colors.muted, 
        lineHeight: 1.9 
      }}>
        {service.desc}
      </p>
      <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ 
          fontFamily: fonts.body, 
          fontSize: 12, 
          color: colors.gold, 
          letterSpacing: '0.06em' 
        }}>
          استشارة مجانية
        </span>
        <span style={{ color: colors.gold, fontSize: 14 }}>←</span>
      </div>
    </div>
  );
}

export default Services;