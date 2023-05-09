import "@fontsource/lexend-mega/700.css"

import Styled from "./Text.styled";

export interface TextProps {
  children: string;
  color: React.CSSProperties['color'];
}

function Button({ children, color }: TextProps) {
  return <Styled.Text color={color}>{children}</Styled.Text>
}

export default Button;