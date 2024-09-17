import "./App.css";
import Header from "./components/header/HeaderMain";
import HomePessoa from "./components/pages/pessoas/HomePessoa";

function App() {
  // Retorno: aqui será chamada a tela principal
  return (
    <div className="App">
      <Header />
      <HomePessoa />
    </div>
  );
}

export default App;
