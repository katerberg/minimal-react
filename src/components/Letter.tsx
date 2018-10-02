import * as React from 'react';
import { ProfileModal } from './ProfileModal';
import { ListGroup } from 'reactstrap';
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
				<ListGroup>
					{this.props.names.map((name: string) => (
						<ProfileModal key={name} name={name} />
					))}
				</ListGroup>
			</div>
		);
	}
}
