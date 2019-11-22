import React from "react";
import "./App.css";
import Popup from "reactjs-popup";
import Content from "./Content.js";
function Pop() {
  const PopUp = (
    <Popup modal trigger={<button className="Pop"></button>}>
      {close => <Content close={close} />}
    </Popup>
  );
  return <div>{PopUp}</div>;
}

export default Pop;
