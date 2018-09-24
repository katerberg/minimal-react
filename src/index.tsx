import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PeopleList } from './components/PeopleList';
import 'bootstrap/dist/css/bootstrap.min.css'; //tslint:disable-line
import './index.scss';
const logo = require('./logo.jpg'); //tslint:disable-line

ReactDOM.render(
	<div>
		<PeopleList />
		<img src={logo} />
	</div>,
	document.getElementById('app')
);
