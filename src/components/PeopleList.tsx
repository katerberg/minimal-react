import * as React from 'react';
import { Letter } from './Letter';
import { IEmployee } from './MainComponent';

interface IPeopleListProps {
	employees: IEmployee[];
	letters: string[];
}

export class PeopleList extends React.Component<IPeopleListProps, {}> {
	public state: IPeopleListProps;

	constructor(props: IPeopleListProps) {
		super(props);
		this.state = {
			employees: this.props.employees,
			letters: this.props.letters,
		};
	}

	componentWillReceiveProps(nextProps: IPeopleListProps){
       if(nextProps.employees !== this.props.employees){
           this.setState({employees: nextProps.employees});
       }
			 if(nextProps.letters !== this.props.letters){
           this.setState({letters: nextProps.letters});
       }
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
				{this.state.letters.map((letter: string) => (
					<Letter key={letter} letter={letter} employees={this.filterNames(this.state.employees, letter)} />
				))}
			</div>
		);
	}
}
