import Player from "./components/Player";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <li>
              <Player
                initialName="Player 1"
                symbol="X"
                isActive={true}
                onSelect={() => {}}
              />
            </li>
            <li>
              <Player
                nameinitialName="Player 2"
                symbol="O"
                isActive={false}
                onSelect={() => {}}
              />
            </li>
          </ol>
          GAME BOARD
        </div>
      </main>
    </>
  );
}

export default App;
