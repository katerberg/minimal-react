import * as React from 'react';

export interface ILetterProps {
	letter: string;
	names: string[];
}

export class Letter extends React.Component<ILetterProps, {}> {

	public render() {
		return (
			<div>
				<h1>{this.props.letter}</h1>
				<hr />
				<ul>
					{this.props.names.map(n => (
						<li key={n}>{n}</li>
					))}
				</ul>
			</div>
		);
	}
}
