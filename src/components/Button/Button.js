import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  render() {
    const { agregarAlCarro } = this.props;
    return <button className="producto__boton" onClick={agregarAlCarro}>{this.props.children}</button>;
  }
}
