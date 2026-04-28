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
      background: colors.gold,
      color: colors.dark,
      border: `1px solid ${colors.gold}`,
    },
    secondary: {
      background: 'transparent',
      color: colors.offWhite,
      border: `1px solid ${colors.muted}55`,
    },
    outline: {
      background: 'transparent',
      color: colors.gold,
      border: `1px solid ${colors.gold}`,
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