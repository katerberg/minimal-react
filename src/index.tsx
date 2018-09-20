import 'bootstrap/dist/css/bootstrap.min.css'; //tslint:disable-line
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import * as logo from './logo.jpg';

import { Hello } from './components/Hello';

ReactDOM.render(
	<div>
		<img src={logo} />
		<Hello compiler="TypeScript" framework="React" />
	</div>,
	document.getElementById('app')
);
