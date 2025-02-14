import { useState } from "react";
import "./App.css";

// Square component representing a single box in the grid
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Board component that displays the 3x3 grid and handles game logic
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    // Prevent clicking on already occupied squares or if the game has been won
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // Create a copy of the squares array and update the selected square
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  // Determine game status (Next Player or Winner)
  const winner = calculateWinner(squares);
  let status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className="status">{status}</div>
      {/* Render 3 rows of the board */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Main Game component that manages game state and history
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // Stores previous moves
  const [currentMove, setCurrentMove] = useState(0); // Tracks current move number
  const xIsNext = currentMove % 2 === 0; // Determines which player's turn it is
  const currentSquares = history[currentMove]; // Retrieves current board state

  function handlePlay(nextSquares) {
    // Update game history and advance to the next move
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    // Allows jumping to a previous move
    setCurrentMove(nextMove);
  }

  // Generate list of past moves with buttons to return to a previous state
  const moves = history.map((squares, move) => {
    let description = move > 0 ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// Function to check for a winner by evaluating possible winning lines
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return "X" or "O" if a player has won
    }
  }
  return null; // No winner yet
}
