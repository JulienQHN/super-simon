import React from "react";
import "./App.css";

function App() {
  return (
    <div className="Simon">
      <h1 className="Title">Super Simon</h1>
      <h4 className="Check">✔</h4>
      <h4 className="Vague">Vague :</h4>
      <button className="Info"></button>
      <button className="bRouge"></button>
      <button className="bBleu"></button>
      <button className="bViolet"></button>
      <button className="bJaune"></button>
      <button className="bBleuCiel"></button>
      <button className="bVert"></button>
      <button className="Jouer">Jouer</button>
      <button className="Rejouer">Rejouer</button>
      <p className="VotreTour">Votre Tour</p>
    </div>
  );
}

export default App;
