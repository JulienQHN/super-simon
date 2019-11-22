import React, { useState } from "react";
import "./App.css";

function ButtonsPlays() {
  // Le push des clics joueurs + le comptage de clicks

  const [Joueur, SetJoueur] = useState([]);
  const [count, setCount] = useState(0);

  // Chaque notes de musiques du jeu

  let SoundRouge = new Audio("do.wav");
  let SoundBleu = new Audio("re.wav");
  let SoundViolet = new Audio("mi.wav");
  let SoundVert = new Audio("fa.wav");
  let SoundBciel = new Audio("sol.wav");
  let SoundJaune = new Audio("la.wav");

  // Liste Renvoyer par le joueur miroité dans une const (J'ai fais des tests lol)

  const ListeJoueur = Joueur.slice(0);

  console.log(ListeJoueur);

  // Fonctions Appliqué à chaqun de mes boutons

  const SRouge = () => {
    SoundRouge.play();
    document.getElementById("Choix").innerHTML = "Rouge";
    setTimeout(function() {
      document.getElementById("Choix").innerHTML = "";
    }, 700);
    SetJoueur(Joueur.concat(0));
  };

  const SBleu = () => {
    SoundBleu.play();
    document.getElementById("Choix").innerHTML = "Bleu";
    setTimeout(function() {
      document.getElementById("Choix").innerHTML = "";
    }, 700);
    SetJoueur(Joueur.concat(1));
  };

  const SViolet = () => {
    SoundViolet.play();
    document.getElementById("Choix").innerHTML = "Violet";
    setTimeout(function() {
      document.getElementById("Choix").innerHTML = "";
    }, 700);
    SetJoueur(Joueur.concat(2));
  };

  const SVert = () => {
    SoundVert.play();
    document.getElementById("Choix").innerHTML = "Vert";
    setTimeout(function() {
      document.getElementById("Choix").innerHTML = "";
    }, 700);
    SetJoueur(Joueur.concat(3));
  };

  const SBciel = () => {
    SoundBciel.play();
    document.getElementById("Choix").innerHTML = "BleuCiel";
    setTimeout(function() {
      document.getElementById("Choix").innerHTML = "";
    }, 700);
    SetJoueur(Joueur.concat(4));
  };

  const SJaune = () => {
    SoundJaune.play();
    document.getElementById("Choix").innerHTML = "Jaune";
    setTimeout(function() {
      document.getElementById("Choix").innerHTML = "";
    }, 700);
    SetJoueur(Joueur.concat(5));
  };

  return (
    <div>
      <div className="ButtonsPlays">
        <h4 className="Check">{count}✔</h4>
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
      <button className="Jouer">jouer</button>
      <button
        onClick={() => {
          setCount(0);
        }}
        className="Rejouer"
      >
        Rejouer
      </button>
      <div id="Choix"></div>
      <div id="FChoix"></div>
    </div>
  );
}

export default ButtonsPlays;
