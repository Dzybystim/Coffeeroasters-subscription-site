import { AppStyled } from "./App.styled";
import { Header } from "./components/Header/Header";
import {Hero} from "../src/components/Hero/Hero";
import {Collection} from "../src/components/Collection/Collection";

function App() {
  return (
    <AppStyled>
      <Header/>
      <Hero/>
      <Collection/>
    </AppStyled>
  );
}

export default App;
