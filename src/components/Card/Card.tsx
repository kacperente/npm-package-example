import Styled from "./Card.styled";

export interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps): React.ReactElement {
  return <Styled.Card>{children}</Styled.Card>
}

export default Card;