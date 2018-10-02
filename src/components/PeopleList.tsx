import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as React from 'react';
import { Letter } from './Letter';

export interface IEmployee {
	_id: string;
	email: string;
	name: string;
	phone: string;
}

interface IPeopleListState {
	employees: IEmployee[];
}

export class PeopleList extends React.Component<{}, IPeopleListState> {
	private letters: string[];

	constructor(props: object) {
		super(props);
		this.state = { employees: [] };
		axios.get(`http://localhost:3000/api/database/employees`).then((res: AxiosResponse) => {
			const users: IEmployee[] = res.data;
			this.setState({ employees: users });
		});

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
	}

	public filterNames(employees: IEmployee[], letter: string): IEmployee[] {
		return employees
			.filter((employee: IEmployee) => employee.name)
			.map((employee: IEmployee) => {
				employee.name = employee.name[0].toUpperCase() + employee.name.slice(1);
				return employee;
			})
			.filter((employee: IEmployee) => employee.name[0] === letter)
			.sort((a: IEmployee, b: IEmployee) => {
				return a.name <= b.name ? -1 : 1;
			});
	}

	public render(): JSX.Element {
		return (
			<div>
				{this.letters.map((letter: string) => (
					<Letter key={letter} letter={letter} employees={this.filterNames(this.state.employees, letter)} />
				))}
			</div>
		);
	}
}
