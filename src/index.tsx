import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainComponent } from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; //tslint:disable-line
import './index.scss';
import * as logo from './logo.jpg';

ReactDOM.render(
	<div>
		<img src={logo} />
		<MainComponent />
	</div>,
	document.getElementById('app')
);
