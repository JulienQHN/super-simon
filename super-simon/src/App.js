import React from "react";
import "./App.css";

function App() {
  return (
    <div className="Simon">
      <h1 className="Title">Super Simon</h1>
      <h4 className="Check">✔</h4>
      <h4 className="Vague">Vague :</h4>
      <button className="Info"></button>
      <button className="bRouge">Rouge</button>
      <button className="bBleu">Bleu</button>
      <button className="bViolet">Violet</button>
      <button className="bJaune">Jaune</button>
      <button className="bBleuCiel">Bleu Ciel</button>
      <button className="bVert">Vert</button>
      <button>Jouer</button>
      <button>Rejouer</button>
      <p>Votre Tour</p>
    </div>
  );
}

export default App;
