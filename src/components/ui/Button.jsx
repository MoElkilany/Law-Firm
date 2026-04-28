import { colors, fonts, transitions } from '../../styles/tokens';

const baseButtonStyle = {
  fontFamily: fonts.body,
  fontSize: 14,
  fontWeight: 700,
  padding: '16px 36px',
  border: 'none',
  cursor: 'pointer',
  letterSpacing: '0.06em',
  transition: transitions.normal,
  textDecoration: 'none',
  display: 'inline-block',
};

export function Button({ 
  children, 
  variant = 'primary', 
  href,
  onClick,
  style = {},
  ...props 
}) {
  const variants = {
    primary: {
      background: colors.primary,
      color: colors.navy,
      border: `1px solid ${colors.primary}`,
    },
    secondary: {
      background: 'transparent',
      color: colors.white,
      border: `1px solid ${colors.silver}55`,
    },
    outline: {
      background: 'transparent',
      color: colors.primary,
      border: `1px solid ${colors.primary}`,
    },
  };

  const variantStyle = variants[variant] || variants.primary;

  const Component = href ? 'a' : 'button';
  const computedStyle = {
    ...baseButtonStyle,
    ...variantStyle,
    ...style,
  };

  return (
    <Component 
      href={href}
      onClick={onClick}
      style={computedStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;