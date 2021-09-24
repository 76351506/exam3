/*
 * @Author: heinan
 * @Date: 2021-09-24 10:34:27
 * @Last Modified by: heinan
 * @Last Modified time: 2021-09-24 10:37:00
 */
import React, { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
const hocAlert = function (WrappedComponent) {
  return function (option) {
    return class extends Component {
      constructor() {
        super();
        this.odiv = option.odiv;
      }
      state = {
        visible: true,
      };

      onClose() {
        this.setState({
          visible: false,
        });
      }
      render() {
        return (
          <WrappedComponent
            classWraper={"alert"}
            showFoot={false}
            visible={this.state.visible}
            onClose={() => this.onClose()}
          >
            {this.props.children}
          </WrappedComponent>
        );
      }
      destory() {
        unmountComponentAtNode(this.odiv);
      }
    };
  };
};

export default hocAlert;
