import * as React from 'react';
import { Letter } from './Letter';
export class PeopleList extends React.Component {
	public filterNames(names: string[], letter: string) {
		const nonEmptyNames: string[] = names.filter(name => name);
		const capitalizedNames: string[] = nonEmptyNames.map(
			name => name[0].toUpperCase() + name.slice(1)
		);
		const filteredNames: string[] = capitalizedNames.filter(
			name => name[0] === letter
		);

		return filteredNames.sort();
	}

	public parseNames(people: Object[]) {}

	public render() {
		const letters: string[] = ['A', 'B', 'C', 'D', 'E', 'J', 'T'];
		const names: string[] = ['Cole', 'Elizabeth', 'Jessica', 'Thomas'];

		return (
			<div>
				{letters.map(letter => (
					<Letter
						key={letter}
						letter={letter}
						names={this.filterNames(names, letter)}
					/>
				))}
			</div>
		);
	}
}
