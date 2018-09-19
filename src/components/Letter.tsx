import * as React from "react";

export interface ILetterProps { letter: String; names: String[]; }

export class Letter extends React.Component<ILetterProps, {}> {

  render() {

    return <div>
      <h1>{this.props.letter}</h1>
      <ul>
        {this.props.names.map(n => <li>{n}</li>)}
      </ul>
    </div>;
  }
}
