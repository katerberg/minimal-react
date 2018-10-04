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
		this.searchByLetter = this.searchByLetter.bind(this);
  }

    public searchByLetter(event:React.KeyboardEvent): void {
			console.log(this);
        const input = event.target as HTMLInputElement
        const inputLength: number = input.value.length;
        if (inputLength > 0){
          console.log("Supposed to be setting state to the one letter" + input.value);
          this.setState({letters: [input.value]});
        }
        else {
          console.log("Supposed to be setting state to whole list");
          this.setState({letters: this.letters});
        }
  	}

    public render(): JSX.Element {
			console.log("Rerendering");
    		return (
    			<div>
            <SearchComponent searchByLetter={this.searchByLetter} />
            <PeopleList employees={this.state.employees} letters={this.state.letters} />
    			</div>
    		);
    	}
    }
