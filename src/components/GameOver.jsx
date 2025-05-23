import { func, string } from "prop-types";

function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}

GameOver.propTypes = {
  winner: string.isRequired,
  onRestart: func.isRequired,
};

export default GameOver;
