import * as React from 'react';

export interface ISecondComponentProps {
	numericalReference: string;
	exclamation: string;
}

// 'HelloProps' describes the shape of props.
// // State is never set so we use the '{}' type.
export class SecondComponent extends React.Component<ISecondComponentProps, {}> {
	public render() {
		return (
			<h2>
				This is my {this.props.numericalReference} component.{' '}
				{this.props.exclamation}!
			</h2>
		);
	}
}
