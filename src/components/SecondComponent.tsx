import * as React from "react";

export interface SecondComponentProps { numericalReference: string; exclamation: string; }

// 'SecondComponentProps' describes the shape of props.
// // State is never set so we use the '{}' type.
export class SecondComponent extends React.Component<SecondComponentProps, {}>  {
  render() {
    return <h2>This is my {this.props.numericalReference} component. {this.props.exclamation}!</h2>;
  }
}
