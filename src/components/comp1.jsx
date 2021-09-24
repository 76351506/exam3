import React, { Component } from "react";

class comp1 extends Component {
  sendMessage(text) {
    window.events.$emit("hahaha", text);
  }
  render() {
    return (
      <div>
        this is comp1
        <button onClick={() => this.sendMessage("666")}>发消息给组件2</button>
      </div>
    );
  }
}

export default comp1;
