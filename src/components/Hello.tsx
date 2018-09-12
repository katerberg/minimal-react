import * as React from "react";
import { LoginPage } from "./LoginPage";

function
// 'HelloProps' describes the shape of props.
// // State is never set so we use the '{}' type.

export class Hello extends React.Component {

  handleClick() {
          alert("OUCH!");
      }

  render() {
    return <div>
      <img src="https://www.slalom.com/sites/all/themes/slalom_bootstrap/images/slalom-logo-default@2x.png" /><h1>Freestyle Logo</h1>
<button onClick={()=> handleClick()}>Login</button>
<button onClick={()=> handleClick()}>Sign Up!</button>
<hr />
<LoginPage textValue="Log In"/>
<LoginPage textValue="Sign Up"/>
</div>;
  }
}
