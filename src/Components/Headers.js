import GameLogo from "../assests/game-logo.png";
export default function header() {
  return (
    <header>
      <img src={GameLogo} alt="GamesLogo"></img>
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
}
