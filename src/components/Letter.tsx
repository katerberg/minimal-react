import * as React from 'react';
import { ProfileModal } from './ProfileModal';
export interface ILetterProps {
	letter: string;
	names: string[];
}

export class Letter extends React.Component<ILetterProps, {}> {
	public render(): JSX.Element {
		return (
			<div>
				<h1>{this.props.letter}</h1>
				<hr />
				<ul>
					{this.props.names.map((name: string) => (
						<li key={name}>
							<ProfileModal names={name} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}
