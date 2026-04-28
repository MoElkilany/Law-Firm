import { useState } from 'react';
import { FadeIn, GoldLine, SectionLabel } from '../ui';
import './Testimonials.css';

const reviews = [
  { name: 'أحمد المنصوري', role: 'رجل أعمال', text: 'تعاملت مع مكتب العدالة في قضية تجارية معقدة وكانت النتيجة أفضل مما توقعت. الاحترافية والسرعة في العمل أمر لافت للنظر حقاً.', stars: 5 },
  { name: 'نور الحسيني', role: 'مديرة تنفيذية', text: 'فريق متميز يجمع بين العمق القانوني والإنسانية في التعامل. شعرت بالاطمئنان طوال مراحل القضية وانتهت بنتيجة ممتازة.', stars: 5 },
  { name: 'خالد العتيبي', role: 'مقاول', text: 'استشرت مكتب العدالة في عدة عقود عقارية وكانوا دقيقين ومحترفين للغاية. أنصح بهم بشدة لأي شخص يبحث عن استشارة قانونية موثوقة.', stars: 5 },
  { name: 'سلمى الراشد', role: 'محامية', text: 'مكتب بمستوى دولي في خدمة عملاء محلية. التزامهم بالمواعيد والشفافية في الأتعاب جعل التعاون معهم تجربة استثنائية.', stars: 5 },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__inner">
        <FadeIn>
          <div className="testimonials__header">
            <SectionLabel text="آراء عملائنا" />
            <GoldLine />
            <h2 className="testimonials__title">ثقة تبنى على الإنجاز</h2>
          </div>
        </FadeIn>

        <div className="testimonials__grid">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 100}>
              <ReviewCard review={review} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`test-card ${hovered ? 'test-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="test-card__stars">
        {[...Array(review.stars)].map((_, j) => (
          <svg key={j} width="16" height="16" viewBox="0 0 16 16" className="test-card__star">
            <path d="M8 1.5L9.8 5.8L14.5 6.3L11 9.5L11.9 14.2L8 12L4.1 14.2L5 9.5L1.5 6.3L6.2 5.8L8 1.5Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        ))}
      </div>
      <blockquote className="test-card__quote">
        <span className="test-card__quote-mark">"</span>
        {review.text}
      </blockquote>
      <div className="test-card__author">
        <div className="test-card__avatar">{review.name[0]}</div>
        <div className="test-card__info">
          <p className="test-card__name">{review.name}</p>
          <p className="test-card__role">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;