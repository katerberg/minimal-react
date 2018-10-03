import * as React from 'react';
import { Input, Label } from 'reactstrap';

interface ISearchComponentProps {
	searchByLetter: (event: KeyboardEvent) => string;
}

export class SearchComponent extends React.Component<ISearchComponentProps, {}> {
  constructor(props: ISearchComponentProps) {
		super(props);
	}
	public render(): JSX.Element {
		return (
			<div>
				<Label>Search</Label>
				<Input type="text" onKeyUp={this.props.searchByLetter.bind(this)} />
			</div>
		);
	}
}
