
import { NavLink } from "react-router-dom";

import { HeaderStyled } from "./Header.styled";
import { Logo } from "./Logo/Logo";
import {Modal} from "../Modal/Modal"
import  hamburger  from "../../assets/shared/mobile/icon-hamburger.svg";



export const Header = ({modalActive, setModalActive}) => {

  return (
    <HeaderStyled>
      <Logo/>
      <button type="button" onClick={() => setModalActive(true)}>
      <img src={hamburger} alt="menu"/>
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
      <nav>
        <NavLink to="/" end> Home </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/subscribe">Subscribe</NavLink>
      </nav>
      </Modal>
    </HeaderStyled>
  );
};
