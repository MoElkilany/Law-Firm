import { useState } from 'react';
import { colors, fonts } from '../../styles/tokens';
import { FadeIn, GoldLine, SectionLabel } from '../ui';

const reviews = [
  { name: 'أحمد المنصوري', role: 'رجل أعمال', text: 'تعاملت مع مكتب العدالة في قضية تجارية معقدة وكانت النتيجة أفضل مما توقعت. الاحترافية والسرعة في العمل أمر لافت للنظر حقاً.', stars: 5 },
  { name: 'نور الحسيني', role: 'مديرة تنفيذية', text: 'فريق متميز يجمع بين العمق القانوني والإنسانية في التعامل. شعرت بالاطمئنان طوال مراحل القضية وانتهت بنتيجة ممتازة.', stars: 5 },
  { name: 'خالد العتيبي', role: 'مقاول', text: 'استشرت مكتب العدالة في عدة عقود عقارية وكانوا دقيقين ومحترفين للغاية. أنصح بهم بشدة لأي شخص يبحث عن استشارة قانونية موثوقة.', stars: 5 },
  { name: 'سلمى الراشد', role: 'محامية', text: 'مكتب بمستوى دولي في خدمة عملاء محلية. التزامهم بالمواعيد والشفافية في الأتعاب جعل التعاون معهم تجربة استثنائية.', stars: 5 },
];

export function Testimonials() {
  return (
    <section 
      id="testimonials" 
      style={{ 
        background: colors.dark, 
        padding: '120px 5vw', 
        direction: 'rtl' 
      }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <SectionLabel text="آراء عملائنا" />
            <GoldLine />
            <h2 style={{ 
              fontFamily: fonts.display, 
              fontSize: 'clamp(32px, 4vw, 52px)', 
              fontWeight: 700, 
              color: colors.offWhite 
            }}>
              ثقة تبنى على الإنجاز
            </h2>
          </div>
        </FadeIn>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 24 
        }}>
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 80}>
              <ReviewCard review={review} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index }) {
  const [active, setActive] = useState(false);

  return (
    <div 
      style={{ 
        background: colors.darkCard, 
        border: `1px solid ${active ? `${colors.gold}55` : colors.darkBorder}`, 
        padding: '36px 28px', 
        transition: 'all 0.3s', 
        cursor: 'pointer' 
      }}
      onClick={() => setActive(!active)}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = `${colors.gold}55`}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = colors.darkBorder}
    >
      <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
        {[...Array(review.stars)].map((_, j) => (
          <span key={j} style={{ color: colors.gold, fontSize: 14 }}>★</span>
        ))}
      </div>
      <p style={{ 
        fontFamily: fonts.display, 
        fontSize: 18, 
        color: colors.offWhite, 
        lineHeight: 1.8, 
        fontStyle: 'italic', 
        marginBottom: 24 
      }}>
        "{review.text}"
      </p>
      <div style={{ 
        borderTop: `1px solid ${colors.darkBorder}`, 
        paddingTop: 16, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 12 
      }}>
        <div style={{ 
          width: 40, 
          height: 40, 
          background: `${colors.gold}22`, 
          border: `1px solid ${colors.gold}44`, 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontFamily: fonts.display, 
          color: colors.gold, 
          fontSize: 16, 
          fontWeight: 700 
        }}>
          {review.name[0]}
        </div>
        <div>
          <p style={{ 
            fontFamily: fonts.body, 
            fontSize: 13, 
            color: colors.offWhite, 
            fontWeight: 600, 
            margin: 0 
          }}>
            {review.name}
          </p>
          <p style={{ 
            fontFamily: fonts.body, 
            fontSize: 11, 
            color: colors.muted, 
            margin: 0 
          }}>
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;