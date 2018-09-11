import * as React from "react";
import { SecondComponent } from "./SecondComponent";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {

handleClick() {
        alert("OUCH!");
    }
        
  render() {
    return <div>
      <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
    <SecondComponent numericalReference="second" exclamation="Yipee"/>
    <SecondComponent numericalReference="third" exclamation="Wahoo"/>
    <SecondComponent numericalReference="fourth" exclamation="Totally tubular"/>
  <button onClick={handleClick}>Click me!</button>
</div>;
  }
}
