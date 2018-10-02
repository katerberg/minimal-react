import * as React from 'react';
import { Col, ListGroup, Row } from 'reactstrap';
import { ProfileModal } from './ProfileModal';
export interface ILetterProps {
	letter: string;
	names: string[];
}

export class Letter extends React.Component<ILetterProps, {}> {
	public render(): JSX.Element {
		return (
			<div>
				<Row>
					<Col>
						<h1>{this.props.letter}</h1>
					</Col>
				</Row>
				<hr />
				<ListGroup>
					{this.props.names.map((name: string) => (
						<Row>
							<Col sm="6" lg="4">
								<ProfileModal key={name} name={name} />
							</Col>
						</Row>
					))}
				</ListGroup>
			</div>
		);
	}
}
