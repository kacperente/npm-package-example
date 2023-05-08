import Styled from "./Text.styled";

export interface TextProps {
  children: string;
}

function Button({ children }: TextProps) {
  return <Styled.Text>{children}</Styled.Text>
}

export default Button;