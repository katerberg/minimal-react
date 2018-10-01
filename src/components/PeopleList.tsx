import * as React from 'react';
import { Letter } from './Letter';
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

export type Employee = {
	_id: string;
	name: string;
	phone: string;
	email: string;
};

interface IPeopleListState {
	employees: Employee[];
}

export class PeopleList extends React.Component<{}, IPeopleListState> {

	private letters: string[];

	constructor(props: object) {
		super(props);
		this.state = {employees: []}
		axios.get(`http://localhost:3000/api/database/employees`).then((res: AxiosResponse) => {
			console.log('responded?');
			const users = res.data;
			this.setState({ employees: users });
		});

		// this.employees = [];
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
		// this.employees = ['Cole', 'Elizabeth', 'Jessica', 'Thomas'];
	}

	public filterNames(employees: Employee[], letter: string): Employee[] {
		const nonEmptyNames: Employee[] = employees.filter((employee: Employee) => employee.name);
		const capitalizedNames: Employee[] = nonEmptyNames.map((employee: Employee) => {
			employee.name = employee.name[0].toUpperCase() + employee.name.slice(1);
			return employee;
		});
		const filteredNames: Employee[] = capitalizedNames.filter((employee: Employee) => employee.name[0] === letter);

		return filteredNames;
		// return filteredNames.sort(function(a: Employee, b: Employee) {
		//   var nameA = a.name;
		//   var nameB = b.name;
		//   if (nameA < nameB) {
		//     return -1;
		//   }
		//   if (nameA > nameB) {
		//     return 1;
		//   }
		//
		//   // names must be equal
		//   return 0;
		// });
	}

	public render(): JSX.Element {
			return (
				<div>
					{this.letters.map((letter: string) => (
						<Letter key={letter} letter={letter} employees={!this.state ? [] : this.filterNames(this.state.employees, letter)} />
					))}
				</div>
			);
	}
}
