import * as React from "react";

export interface HelloProps { textValue: string }

function handleSubmit() {
  console.log("Hello");
}

export class LoginPage extends React.Component<HelloProps, {}> {

  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};
  // }


  render() {
    return <div>
      <form onSubmit={()=>handleSubmit()}>
        <label>
          Email
        <input type="text"/>
      </label>
      <label>
        Password
        <input type="password" />
      </label>
        <input type="submit" value={this.props.textValue} />
      </form>
    </div>;
  }
}
