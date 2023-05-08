import styled from "styled-components";

const Stack = styled.div<{ direction: "row" | "column", gap?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}
`;

export default {
  Stack,
}