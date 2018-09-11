import * as React from "react";
import { HelloProps } from "./Hello";

export class Goodbye extends React.Component<HelloProps, {}> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}
