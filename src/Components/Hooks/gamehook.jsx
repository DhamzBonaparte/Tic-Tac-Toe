import { useState } from "react";
import { win } from "../win";

const player = () => Array(9).fill(null);

const usePlay = () => {
  const [now, setNow] = useState(player());
  const [isX, setIsX] = useState(true);

  const getStatusMessage = () => {
    const winner = checkWinner();
    if (winner) return `Player ${winner} wins!`;
    if (!now.includes(null)) return `It's a draw!`;
    return `Player ${isX ? "X" : "O"} turn`;
  };

  const checkWinner = () => {
    for (let items of win) {
      const [a, b, c] = items;
      if (now[a] && now[a] === now[b] && now[b] === now[c]) {
        return now[a];
      }
    }
  };

  const handleClick = (id) => {
    checkWinner();
    if (checkWinner() || now[id]) return;

    const newBoard = [...now];
    newBoard[id] = isX ? "X" : "O";
    setNow(newBoard);
    setIsX(!isX);
  };

  const resetGame = () => {
    setNow(player());
    setIsX(true);
  };

  return { now, getStatusMessage, handleClick, resetGame };
};

export default usePlay;
