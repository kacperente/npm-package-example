import Styled from "./Button.styled";

export interface ButtonProps {
  children: string;
  variant: "primary" | "secondary";
}

function Button({ children, variant }: ButtonProps) {
  return <Styled.Button variant={variant}>{children}</Styled.Button>
}

export default Button;