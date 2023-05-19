import "@fontsource/lexend-mega/700.css"

import Styled from "./Text.styled";

export interface TextProps {
  children: string;
  color: React.CSSProperties['color'];
}

function Text({ children, color }: TextProps): React.ReactElement {
  return <Styled.Text color={color}>{children}</Styled.Text>
}

export default Text;