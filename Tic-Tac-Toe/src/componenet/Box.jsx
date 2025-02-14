import React from "react";

// Box component represents a single clickable square
export default function Box({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
