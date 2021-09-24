/*
 * @Author: heinan
 * @Date: 2021-09-23 15:32:59
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-24 11:24:55
 */
import React, { Component } from "react";
import Dialog, { alert } from "@/components/dialog";
import Comp1 from "@/components/comp1";
import Comp2 from "@/components/comp2";

import "@/assets/css/reset.css";
import "@/assets/css/common.css";

class App extends Component {
  state = {
    visible: false,
  };
  closeHandler() {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        this is app page
        <Comp1></Comp1>
        <Comp2></Comp2>
        <button onClick={() => this.setState({ visible: !this.state.visible })}>
          显示/隐藏
        </button>
        <button onClick={() => alert("meinv")}>美女</button>
        <Dialog
          visible={this.state.visible}
          onClose={() => this.closeHandler()}
        >
          1322131
        </Dialog>
      </div>
    );
  }
}

export default App;
