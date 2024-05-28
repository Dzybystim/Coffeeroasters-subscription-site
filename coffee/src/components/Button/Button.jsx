import {ButtonStyled} from "./Button.styled"

export const Button = ({children, href}) => {
    return (
<ButtonStyled href={href}>
{children}
</ButtonStyled>
    );
  };