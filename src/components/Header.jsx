import React from "react";

export default function Header({ mode, onModeChange }) {
  return (
    <header className="header">
      <h1> Animal Facts & Images</h1>
      <div className="nav-switch">
        <button
          className={mode === "dog" ? "active" : ""}
          onClick={() => onModeChange("dog")}
        >
          🐶 Dog Mode
        </button>
        <button
          className={mode === "cat" ? "active" : ""}
          onClick={() => onModeChange("cat")}
        >
          🐱 Cat Mode
        </button>
      </div>
    </header>
  );
}
