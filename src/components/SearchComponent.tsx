import * as React from 'react';
import { Input, Label } from 'reactstrap';

interface ISearchComponentProps {
	searchByLetter: (event: React.KeyboardEvent<Element>) => void;
}

export class SearchComponent extends React.Component<ISearchComponentProps, {}> {
	constructor(props: ISearchComponentProps) {
		super(props);
	}
	public render(): JSX.Element {
		return (
			<div>
				<Label>Search</Label>
				<Input type="text" maxLength={1} onKeyUp={this.props.searchByLetter} />
			</div>
		);
	}
}
