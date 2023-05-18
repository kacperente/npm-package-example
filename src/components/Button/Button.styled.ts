import styled from "styled-components";

const buttonVariants = {
  primary: {
    background: { default: '#d91210', hover: '#e4211f' },
    text: '#ffffff',
    border: '#000000'

  },
  secondary: {
    background: { default: '#1110db', hover: '#2f2ee4' },
    text: '#ffffff',
    border: '#000000'
  }
} as const;

const Button = styled.button<{ variant: keyof typeof buttonVariants }>`
  padding: 10px 24px;
  border-color: ${({ variant }) => buttonVariants[variant].border};
  border-width: 3px;
  border-style: solid;
  border-radius: 6px;
  background-color: ${({ variant }) => buttonVariants[variant].background.default};
  color: ${({ variant }) => buttonVariants[variant].text};
  letter-spacing: -3px;
  font-size: 16px;
  font-family: 'Lexend Mega', sans-serif;
  line-height: 20px;
  box-shadow: 3px 3px 0px 0px #000000;
  cursor: pointer;

  &:hover {
    border-color: ${({ variant }) => buttonVariants[variant].border};
    background-color: ${({ variant }) => buttonVariants[variant].background.hover};
  }
`;

export default {
  Button,
}