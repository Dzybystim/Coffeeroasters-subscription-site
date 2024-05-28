import { HeaderStyled } from "./Header.styled";
import { Logo } from "./Logo/Logo";
import  hamburger  from "../../assets/shared/mobile/icon-hamburger.svg";



export const Header = () => {
  return (
    <HeaderStyled>
      <Logo/>
      <img src={hamburger} alt="menu"></img>
    </HeaderStyled>
  );
};
