import { colors, fonts, transitions } from '../../styles/tokens';

const baseInputStyle = {
  width: '100%',
  background: colors.darkCard,
  border: `1px solid ${colors.darkBorder}`,
  color: colors.offWhite,
  padding: '14px 16px',
  fontFamily: fonts.body,
  fontSize: 14,
  outline: 'none',
  transition: transitions.fast,
  marginBottom: 16,
};

export function Input({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  style = {},
  ...props 
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ ...baseInputStyle, ...style }}
      onFocus={(e) => e.target.style.borderColor = `${colors.gold}66`}
      onBlur={(e) => e.target.style.borderColor = colors.darkBorder}
      {...props}
    />
  );
}

export function Textarea({ 
  placeholder,
  value,
  onChange,
  rows = 5,
  style = {},
  ...props 
}) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      style={{ 
        ...baseInputStyle, 
        resize: 'vertical', 
        marginBottom: 24,
        ...style 
      }}
      onFocus={(e) => e.target.style.borderColor = `${colors.gold}66`}
      onBlur={(e) => e.target.style.borderColor = colors.darkBorder}
      {...props}
    />
  );
}

export default { Input, Textarea };