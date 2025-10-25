import Player from "./Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="O" />
          <Player name="Player 2" symbol="X" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
