import React, { Component } from "react";
import "./App.css";
import ButtonsPlays from "./ButtonsPlays.js";
import Pop from "./Pop.js";
//import PlayerSet from "./PlayerSet.js";
class App extends Component {
  //constructor(props) {
  // super(props);
  //}

  render() {
    return (
      <div className="Simon">
        <h1 className="Title">Super Simon</h1>
        <h4 className="Vague">Vague :</h4>
        <Pop />
        <ButtonsPlays />
        <p className="VotreTour">Votre Tour</p>
      </div>
    );
  }
}

export default App;
