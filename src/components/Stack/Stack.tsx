import Styled from "./Stack.styled";

export interface StackProps {
  children: React.ReactNode;
  direction: "row" | "column";
  gap?: string;
}

function Button({ children, direction, gap}: StackProps): React.ReactElement {
  return <Styled.Stack direction={direction} gap={gap}>{children}</Styled.Stack>
}

export default Button;