import image from "../../../assets/shared/desktop/logo.svg"
import {LogoBox} from "./Logo.styled"

export const Logo = () => {
  return (
    <LogoBox>
      <img
        src={image}
        alt="coffee"
      ></img>
     </LogoBox>
  );
};
