import { AppStyled } from "./App.styled";
import { Header } from "./Header/Header";

function App() {
  return (
    <AppStyled>
      <Header>
        <p>Pipets</p>
        <p> Вообще пипец</p>
      </Header>
    </AppStyled>
  );
}

export default App;
