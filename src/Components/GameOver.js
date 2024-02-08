export default function GameOver({ winner }) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}

      {!winner && <p>It's Draw!</p>}
      <p>
        <button onClick={refreshPage}>Click to reload!</button>
      </p>
    </div>
  );
}
