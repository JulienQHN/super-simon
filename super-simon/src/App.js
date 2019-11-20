import React from "react";
import "./App.css";
import Popup from "reactjs-popup";
import Content from "./Content.js";
import ButtonsPlays from "./ButtonsPlays.js";
//import PlayerSet from "./PlayerSet.js";

function App() {
  const PopUp = (
    <Popup modal trigger={<button className="Pop"></button>}>
      {close => <Content close={close} />}
    </Popup>
  );
  return (
    <div className="Simon">
      <h1 className="Title">Super Simon</h1>
      <h4 className="Vague">Vague :</h4>
      <div>{PopUp}</div>
      <ButtonsPlays />
      <button onClick className="Jouer">
        Jouer
      </button>
      <button className="Rejouer">Rejouer</button>
      <p className="VotreTour">Votre Tour</p>
    </div>
  );
}

export default App;
