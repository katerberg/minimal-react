import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainComponent } from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; //tslint:disable-line
import './index.scss';
import * as logo from './logo.png';

ReactDOM.render(
	<div>
		<img src={logo} className="image" />
		<MainComponent />
	</div>,
	document.getElementById('app')
);
