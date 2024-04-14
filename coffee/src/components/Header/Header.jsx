import { HeaderStyled } from "./Header.styled";
import { Logo } from "../Logo/Logo";

export const Header = ({ children }) => {
  return (
    <HeaderStyled>
      <Logo></Logo>
      {children}
    </HeaderStyled>
  );
};
