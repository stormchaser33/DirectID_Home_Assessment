import "./App.css";
import { Logo } from "./components/atoms/Logo";
import { Container } from "./components/atoms/Container";
import { LangSelect } from "./components/atoms/LangSelect";

function App() {
  return (
    <div className="App">
      <LangSelect />
      <Container>
        <Logo />
      </Container>
    </div>
  );
}

export default App;
