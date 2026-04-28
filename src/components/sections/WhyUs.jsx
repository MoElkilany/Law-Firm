import { useState } from 'react';
import { colors, fonts } from '../../styles/tokens';
import { FadeIn, GoldLine, SectionLabel } from '../ui';

const points = [
  { icon: '🎓', title: 'خبرة لا مثيل لها', desc: 'أكثر من ٣٠ عاماً من الممارسة القانونية في أبرز المحاكم.' },
  { icon: '⚡', title: 'سرعة الإنجاز', desc: 'نضمن الفصل في القضايا بسرعة دون المساس بجودة الدفاع.' },
  { icon: '🔒', title: 'سرية تامة', desc: 'معلوماتك وقضيتك في مأمن تام وفق أعلى معايير الخصوصية.' },
  { icon: '🏆', title: 'نتائج مضمونة', desc: 'نسبة نجاح ٩٨٪ عبر سجل حافل يتحدث عن نفسه.' },
  { icon: '📞', title: 'تواصل مستمر', desc: 'على اطلاع دائم بكل مستجدات قضيتك على مدار الساعة.' },
  { icon: '💎', title: 'تكاليف شفافة', desc: 'أتعاب واضحة بلا مفاجآت، وأولوية لمصلحة العميل دائماً.' },
];

export function WhyUs() {
  return (
    <section 
      id="why" 
      style={{ 
        background: '#0D0D0D', 
        padding: '120px 5vw', 
        direction: 'rtl' 
      }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <SectionLabel text="لماذا تختارنا" />
            <GoldLine />
            <h2 style={{ 
              fontFamily: fonts.display, 
              fontSize: 'clamp(32px, 4vw, 52px)', 
              fontWeight: 700, 
              color: colors.offWhite 
            }}>
              الفرق يكمن في التفاصيل
            </h2>
          </div>
        </FadeIn>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 24 
        }}>
          {points.map((point, i) => (
            <FadeIn key={i} delay={i * 80}>
              <WhyCard point={point} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ point }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      style={{ 
        textAlign: 'center', 
        padding: '40px 24px', 
        background: hovered ? `${colors.gold}06` : 'transparent',
        transition: 'background 0.3s' 
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ 
        width: 64, 
        height: 64, 
        border: `1px solid ${colors.gold}33`, 
        margin: '0 auto 20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontSize: 24, 
        borderRadius: '50%' 
      }}>
        {point.icon}
      </div>
      <div style={{ width: 40, height: 1, background: colors.gold, margin: '0 auto 16px' }} />
      <p style={{ 
        fontFamily: fonts.display, 
        fontSize: 20, 
        color: colors.offWhite, 
        fontWeight: 600, 
        marginBottom: 10 
      }}>
        {point.title}
      </p>
      <p style={{ 
        fontFamily: fonts.body, 
        fontSize: 13, 
        color: colors.muted, 
        lineHeight: 1.8 
      }}>
        {point.desc}
      </p>
    </div>
  );
}

export default WhyUs;