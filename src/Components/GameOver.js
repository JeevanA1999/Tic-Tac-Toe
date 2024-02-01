export default function GameOver({ winner, rematch }) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}

      {!winner && <p>It's Draw!</p>}
      <p>
        <button onClick={rematch}>Click to reload!</button>
      </p>
    </div>
  );
}
