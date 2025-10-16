
import usePlay from "./Hooks/gamehook";
import './games.scss'

export default function Game() {
    const {now,getStatusMessage,handleClick,resetGame} = usePlay();
  return (
    <>
    <h1>Tic-Tac-Toe</h1>
      <div className="game">
        <div className="status">
          <h3 style={{color:"White"}}>{getStatusMessage()}</h3>
          <button className="reset" onClick={() => resetGame()}>Reset Game</button>
        </div>

        <div className="board">
          {now.map((box, id) => {
            return (
              <button
              className="but"
                key={id}
                disabled={box != null}
                onClick={() => handleClick(id)}
              >
                <p style={{color:"black",fontWeight:700,fontSize:'40px'}}>{box}</p>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
