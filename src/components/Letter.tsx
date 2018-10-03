import * as React from 'react';
import { IEmployee } from './PeopleList';
import { ProfileModal } from './ProfileModal';

export interface ILetterProps {
	letter: string;
	employees: IEmployee[];
}

export class Letter extends React.Component<ILetterProps, {}> {
	public render(): JSX.Element {
		return (
			<div>
				<h1>{this.props.letter}</h1>
				<hr />
				<ul>
					{this.props.employees.map(employee => (
						<li key={employee._id}>
							<ProfileModal name={employee.name} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}
