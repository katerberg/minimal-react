import * as React from "react";
import * as ReactDOM from "react-dom";

import { PeopleList } from "./components/PeopleList";
import './index.scss';

ReactDOM.render(<PeopleList/>,
    document.getElementById("app")
);
