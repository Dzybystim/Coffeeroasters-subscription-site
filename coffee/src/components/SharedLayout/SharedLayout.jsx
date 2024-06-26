import { Outlet } from "react-router-dom";
import {Container} from "./SharedLayout.styled";
import {Header} from "../Header/Header";

export const SharedLayout = () => {
  return (
    <Container>
      <Header/>
      <Outlet />
    </Container>
  );
};