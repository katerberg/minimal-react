import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Goodbye } from "./components/Goodbye";

ReactDOM.render(
  <div>
    <Hello compiler="TypeScript" framework="React" />
    <ul>
      <Goodbye compiler="OtherThing" framework="Stuff" />
      <Goodbye compiler="OtherThing2" framework="Stuff1" />
      <Goodbye compiler="OtherThing3" framework="Stuff2" />
      <Goodbye compiler="OtherThing4" framework="Stuff3" />
    </ul>
  </div>,
    document.getElementById("app")
);
