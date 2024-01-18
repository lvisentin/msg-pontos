import "./App.css";
import logo from "/dominando_pontos.png";

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const message =
    queryParams.get("msg") == "suc"
      ? "Obrigado por assinar o Dominando Pontos, seja bem vindo!"
      : "Algo deu errado, tente novamente mais tarde";

  return (
    <main className={`main`}>
      <img src={logo} />
      <span>{message}</span>
    </main>
  );
}

export default App;
