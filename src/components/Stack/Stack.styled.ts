import styled from "styled-components";

const Stack = styled.div<{ direction: "row" | "column", gap?: React.CSSProperties['gap'] }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;

export default {
  Stack,
}