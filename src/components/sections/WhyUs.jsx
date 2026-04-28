import { useState } from 'react';
import { FadeIn, GoldLine, SectionLabel } from '../ui';
import Icon from '../ui/Icon';
import './WhyUs.css';

const points = [
  { icon: 'graduation', title: 'خبرة لا مثيل لها', desc: 'أكثر من ١٥ عاماً من الممارسة القانونية في أبرز المحاكم.' },
  { icon: 'bolt', title: 'سرعة الإنجاز', desc: 'نضمن الفصل في القضايا بسرعة دون المساس بجودة الدفاع.' },
  { icon: 'lock', title: 'سرية تامة', desc: 'معلوماتك وقضيتك في مأمن تام وفق أعلى معايير الخصوصية.' },
  { icon: 'trophy', title: 'نتائج مضمونة', desc: 'نسبة نجاح ٩٨٪ عبر سجل حافل يتحدث عن نفسه.' },
  { icon: 'phone', title: 'تواصل مستمر', desc: 'على اطلاع دائم بكل مستجدات قضيتك على مدار الساعة.' },
  { icon: 'diamond', title: 'تكاليف شفافة', desc: 'أتعاب واضحة بلا مفاجآت، وأولوية لمصلحة العميل دائماً.' },
];

export function WhyUs() {
  return (
    <section id="why" className="why">
      <div className="why__glow" />
      <div className="why__inner">
        <FadeIn>
          <div className="why__header">
            <SectionLabel text="لماذا تختارنا" />
            <GoldLine />
            <h2 className="why__title">الفرق يكمن في التفاصيل</h2>
            <p className="why__subtitle">ستة أسباب تجعل عملاءنا يثقون بنا في كل قضية</p>
          </div>
        </FadeIn>

        <div className="why__grid">
          {points.map((point, i) => (
            <FadeIn key={i} delay={i * 100}>
              <ReasonCard point={point} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ point, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`why-card ${hovered ? 'why-card--active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="why-card__icon-wrap">
        <Icon name={point.icon} size={20} color="#D4A84B" />
      </div>
      <div className="why-card__text">
        <h3 className="why-card__title">{point.title}</h3>
        <p className="why-card__desc">{point.desc}</p>
      </div>
      <div className="why-card__accent" />
    </div>
  );
}

export default WhyUs;