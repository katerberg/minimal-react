import * as React from 'react';
import { Button } from 'reactstrap';
import { SecondComponent } from './SecondComponent';

export interface IHelloProps {
	compiler: string;
	framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
	public handleClick() {
		alert('OUCH!');
	}

	public handleClick() {
		alert('OUCH!');
	}

	public render() {
		return (
			<div>
				<h1>
					Hello from {this.props.compiler} and {this.props.framework}!
				</h1>
				<SecondComponent numericalReference="second" exclamation="Yipee" />
				<SecondComponent numericalReference="third" exclamation="Wahoo" />
				<SecondComponent
					numericalReference="fourth"
					exclamation="Totally tubular"
				/>
				<Button onClick={this.handleClick} color="danger">
					Click me!
				</Button>
			</div>
		);
	}
}
