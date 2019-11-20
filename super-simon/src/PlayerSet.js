//import React, { Component } from "react";

class Playerset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: ["a", "b", "c"]
    };
  }

  onAddItem = () => {
    this.setState(state => {
      const list = [...state.list, state.value];
      return {
        list,
        value: ""
      };
    });
  };
}
export default PlayerSet;
