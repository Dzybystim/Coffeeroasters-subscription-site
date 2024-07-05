// import { useMemo, useEffect } from 'react';
// import { createPortal } from 'react-dom';
import {ModalStyled, ModalContentStyled} from "./Modal.styled"

// const modalRootElement = document.querySelector("#modalRoot");

export const Modal = ({children, active, setActive}) => {

    return(
        active ?
    <ModalStyled onClick={() => setActive(false)}>
        <ModalContentStyled onClick={event => event.stopPropagation()}>{children}</ModalContentStyled>
    </ModalStyled> 
    : children
)
    
    
// const element = useMemo(() => document.createElement("div"), []);

// useEffect(() => {
//     if(active){
//         modalRootElement.appendChild(element);

//         return () => {
//             modalRootElement.removeChild(element);
//         }
//     }

// })


    


   
  };