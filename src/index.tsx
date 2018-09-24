import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PeopleList } from './components/PeopleList';
import 'bootstrap/dist/css/bootstrap.min.css'; //tslint:disable-line
import './index.scss';
const logo = require('./logo.jpg'); //tslint:disable-line

ReactDOM.render(
	<div>
		<img src={logo} />
		<PeopleList />
	</div>,
	document.getElementById('app')
);
