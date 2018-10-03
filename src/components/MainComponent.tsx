import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as React from 'react';
import { PeopleList } from './PeopleList';
import { SearchComponent } from './SearchComponent';

export interface IEmployee {
	_id: string;
	email: string;
	name: string;
	phone: string;
}

interface IMainComponentState {
	employees: IEmployee[];
  letters: string[];
}

export class MainComponent extends React.Component<{}, IMainComponentState> {
  private letters: string[] = [
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

  constructor(props: object) {
    super(props);
    this.state = { employees: [],
    letters: this.letters  };
    axios.get(`http://localhost:3000/api/database/employees`).then((res: AxiosResponse) => {
      const users: IEmployee[] = res.data;
      this.setState({ employees: users });
    });
  }

    public searchByLetter(event: KeyboardEvent): string {
        const input = event.target as HTMLInputElement
        console.log(input.value);
  		return "Hooray";
  	}

    public render(): JSX.Element {
    		return (
    			<div>
            <SearchComponent searchByLetter={this.searchByLetter} />
            <PeopleList employees={this.state.employees} letters={this.state.letters} />
    			</div>
    		);
    	}
    }
  