import { NavLink } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";
import { Logo } from "./Logo/Logo";
import  hamburger  from "../../assets/shared/mobile/icon-hamburger.svg";



export const Header = () => {
  return (
    <HeaderStyled>
      <Logo/>
      <img src={hamburger} alt="menu"></img>
      <nav>
        <NavLink to="/" end> Home </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/subscribe">Subscribe</NavLink>
      </nav>
    </HeaderStyled>
  );
};
