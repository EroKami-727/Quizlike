import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Quizlike! 🎉</h1>
      <p>🚀 Your Vite + React app is live!</p>
      <button
        onClick={() => alert("Changes are working! ✅")}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click me!
      </button>
    </div>
  );
}

export default App;
