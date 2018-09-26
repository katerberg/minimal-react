import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LoginForm } from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css'; //tslint:disable-line
import './index.scss';
import * as logo from './logo.jpg';

ReactDOM.render(
	<div>
		<img src={logo} />
		<LoginForm />
	</div>,
	document.getElementById('app')
);
