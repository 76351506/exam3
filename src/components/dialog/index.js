import React, { Component } from "react";
import ReactDOM from "react-dom";
import hocAlert from "./alert";
import "./dialog.css";

class Dialog extends Component {
  static defaultProps = {
    visible: false,
    showHead: true,
    showFoot: true,
    classWraper: "dialog",
  };
  onClose() {
    this.props.onClose();
  }
  onCancel() {
    this.props.onClose();
  }
  render() {
    const jsx = (
      <div className={`dialog-wraper ${this.props.classWraper}`}>
        {this.props.showHead ? (
          <div className="dialog-header">
            <span className="dialog-close" onClick={() => this.onClose()}>
              x
            </span>
            我是标题
          </div>
        ) : null}
        <div className="dialog-content">{this.props.children}</div>
        {this.props.showFoot ? (
          <div className="dialog-footer">
            <button className="btn" onClick={() => this.onCancel()}>
              取消
            </button>
            <button className="btn">确认</button>
          </div>
        ) : null}
      </div>
    );
    return this.props.visible
      ? ReactDOM.createPortal(jsx, document.body)
      : null;
  }
}

export function message(val) {
  const odiv = document.createElement("div");
  const body = document.body || document.documentElement;
  const Comp = hocAlert(Dialog);
  body.append(odiv);
  ReactDOM.render(<Comp>{val}</Comp>, odiv);
}

export function alert(val) {
  const odiv = document.createElement("div");
  const Comp = hocAlert(Dialog)({ odiv });
  ReactDOM.render(<Comp>{val}</Comp>, odiv);
}
export default Dialog;
