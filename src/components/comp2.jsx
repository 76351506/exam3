import React, { Component } from "react";

class comp2 extends Component {
  componentDidMount() {
    window.events.$on("hahaha", (data) => {
      console.log(data);
    });
  }
  render() {
    return <div>this is comp2</div>;
  }
}

export default comp2;
