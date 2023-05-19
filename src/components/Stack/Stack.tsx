import Styled from "./Stack.styled";

export interface StackProps {
  children: React.ReactNode;
  direction: "row" | "column";
  gap?: React.CSSProperties['gap'];
}

function Stack({ children, direction, gap}: StackProps): React.ReactElement {
  return <Styled.Stack direction={direction} gap={gap}>{children}</Styled.Stack>
}

export default Stack;