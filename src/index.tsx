import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import './index.scss';

const logo = require('./logo.jpg');


ReactDOM.render(<div>
  <img src={logo}/>
  <Hello compiler="TypeScript" framework="React" /></div>,
    document.getElementById("app")
);
