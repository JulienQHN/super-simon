import React, { useState } from "react";
import "./App.css";

function ButtonsPlays() {
  const [count, setCount] = useState(0);
  let SoundRouge = new Audio("do.wav");
  let SoundBleu = new Audio("re.wav");
  let SoundViolet = new Audio("mi.wav");
  let SoundVert = new Audio("fa.wav");
  let SoundBciel = new Audio("sol.wav");
  let SoundJaune = new Audio("la.wav");
  let Joueur = [];

  const SRouge = () => {
    SoundRouge.play();
  };

  const SBleu = () => {
    SoundBleu.play();
  };

  const SViolet = () => {
    SoundViolet.play();
  };

  const SVert = () => {
    SoundVert.play();
  };

  const SBciel = () => {
    SoundBciel.play();
  };

  const SJaune = () => {
    SoundJaune.play();
  };

  return (
    <div className="ButtonsPlays">
      <h4 className="Check">{count}✔</h4>
      <p id="myId"></p>
      <button
        id="0"
        onClick={() => {
          setCount(count + 1);
          SRouge();
        }}
        className="bRouge"
      ></button>
      <button
        id="1"
        onClick={() => {
          setCount(count + 1);
          SBleu();
        }}
        className="bBleu"
      ></button>
      <button
        id="2"
        onClick={() => {
          setCount(count + 1);
          SViolet();
        }}
        className="bViolet"
      ></button>
      <button
        id="3"
        onClick={() => {
          setCount(count + 1);
          SVert();
        }}
        className="bVert"
      ></button>

      <button
        id="4"
        onClick={() => {
          setCount(count + 1);
          SBciel();
        }}
        className="bBleuCiel"
      ></button>
      <button
        id="5"
        onClick={() => {
          setCount(count + 1);
          SJaune();
        }}
        className="bJaune"
      ></button>
    </div>
  );
}

export default ButtonsPlays;
