import * as React from 'react';
import { Letter } from './Letter';
export class PeopleList extends React.Component {

	private letters: string[];
	private names: string[];

	constructor(props: Object) {
			super(props);

			this.letters = [
				'A',
				'B',
				'C',
				'D',
				'E',
				'F',
				'G',
				'H',
				'I',
				'J',
				'K',
				'L',
				'M',
				'N',
				'O',
				'P',
				'Q',
				'R',
				'S',
				'T',
				'U',
				'V',
				'W',
				'X',
				'Y',
				'Z',
			];
			this.names = ['Cole', 'Elizabeth', 'Jessica', 'Thomas'];
	}

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


	public render() {

		return (
			<div>
				{this.letters.map(letter => (
					<Letter
						key={letter}
						letter={letter}
						names={this.filterNames(this.names, letter)}
					/>
				))}
			</div>
		);
	}
}
