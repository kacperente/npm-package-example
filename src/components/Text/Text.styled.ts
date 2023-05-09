import styled from "styled-components";

const Text = styled.p<{ color: React.CSSProperties['color'] }>`
  margin-top: 0;
  letter-spacing: -3px;
  font-family: 'Lexend Mega', sans-serif;
  color: ${({ color }) => color};
`;

export default {
  Text,
}