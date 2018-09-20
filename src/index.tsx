import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss';
import { Hello } from "./components/Hello";

ReactDOM.render(
	<Hello compiler="TypeScript" framework="React" />,
	document.getElementById('app')
);
