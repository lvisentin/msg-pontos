import "./App.css";
import logo from "/dominando_pontos.png";

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const message =
    queryParams.get("msg") == "suc"
      ? "Obrigado por assinar o Dominando Pontos, seja bem vindo!"
      : queryParams.get("msg") == "cancel"
      ? "Vimos que você não quer assinar, fique tranquilo, não iremos cobrar do seu cartão! Obrigado"
      : "Algo deu errado, tente novamente mais tarde";

  return (
    <main className={`main`}>
      <img src={logo} />
      <span>{message}</span>
    </main>
  );
}

export default App;
