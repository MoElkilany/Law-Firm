import { useState } from 'react';
import { FadeIn, GoldLine, SectionLabel } from '../ui';
import Icon from '../ui/Icon';
import './Services.css';

const services = [
  { icon: 'scales', title: 'القضايا المدنية', desc: 'تمثيل قانوني متكامل في الدعاوى المدنية، التعويضات، والنزاعات التجارية والشخصية.' },
  { icon: 'shield', title: 'القضايا الجنائية', desc: 'دفاع قوي وصارم في قضايا الجنايات والجنح مع ضمان جميع حقوق الدفاع القانوني.' },
  { icon: 'building', title: 'قانون الشركات', desc: 'تأسيس الشركات، وصياغة العقود التجارية، وتسوية النزاعات بين الشركاء.' },
  { icon: 'document', title: 'صياغة العقود', desc: 'صياغة ومراجعة العقود القانونية بأعلى معايير الدقة لحماية مصالحك.' },
  { icon: 'home', title: 'العقارات والإيجارات', desc: 'تسوية النزاعات العقارية، توثيق عقود البيع والإيجار والتحكيم.' },
  { icon: 'family', title: 'الأحوال الشخصية', desc: 'قضايا الأسرة، الطلاق، الحضانة، والميراث بتعامل إنساني وحكيم.' },
];

export function Services() {
  return (
    <section id="services" className="svc">
      <div className="svc__glow" />
      <div className="svc__inner">
        <FadeIn>
          <div className="svc__header">
            <SectionLabel text="خدماتنا القانونية" />
            <GoldLine />
            <h2 className="svc__title">تخصص قانوني شامل</h2>
            <p className="svc__desc">
              نقدم طيفاً واسعاً من الخدمات القانونية المتخصصة لأفراد وشركات بكفاءة وسرية تامة.
            </p>
          </div>
        </FadeIn>

        <div className="svc__grid">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 100}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`svc-card ${hovered ? 'svc-card--active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="svc-card__icon-wrap">
        <Icon name={service.icon} size={22} color="currentColor" className="svc-card__svg-icon" />
      </div>
      <div className="svc-card__corner-mark" />
      <h3 className="svc-card__title">{service.title}</h3>
      <p className="svc-card__desc">{service.desc}</p>
      <div className="svc-card__cta">
        <span>استشارة مجانية</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="svc-card__arrow">
          <path d="M12 8H4M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="svc-card__stroke" />
    </div>
  );
}

export default Services;