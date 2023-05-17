import Styled from "./Card.styled";

export interface CardProps {
  children: React.ReactNode;
}

function Button({ children }: CardProps): React.ReactElement {
  return <Styled.Card>{children}</Styled.Card>
}

export default Button;