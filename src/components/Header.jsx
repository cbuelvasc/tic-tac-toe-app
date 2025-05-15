import logo from "../assets/game-logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Tic-Tac-Toe Game Board" />
      <h1>React Tic-Tac-Toe App</h1>
    </header>
  );
}

export default Header;
