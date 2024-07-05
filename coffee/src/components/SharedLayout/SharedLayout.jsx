import { useState } from "react";
import { Outlet } from "react-router-dom";
import {Container} from "./SharedLayout.styled";
import {Header} from "../Header/Header";

export const SharedLayout = () => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <Container>
      <Header modalActive={modalActive} setModalActive={setModalActive}/>
      <Outlet />
    </Container>
  );
};