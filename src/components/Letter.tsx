import * as React from 'react';
import { Col, Container, ListGroup, Row } from 'reactstrap';
import { IEmployee } from './MainComponent';
import './Letter.scss';
import { ProfileModal } from './ProfileModal';

export interface ILetterProps {
	letter: string;
	employees: IEmployee[];
}

export class Letter extends React.Component<ILetterProps, {}> {
	public render(): JSX.Element {
		return (
			<Container>
				<Row>
					<Col>
						<h1 className="letter-name">{this.props.letter}</h1>
					</Col>
				</Row>
				<hr />
				<ListGroup>
					<Row>
						<Col sm="6" lg="4">
							{this.props.employees.map((employee: IEmployee) => (
								<ProfileModal key={employee._id} name={employee.name} email={employee.email} phone={employee.phone} />
							))}
						</Col>
					</Row>
				</ListGroup>
			</Container>
		);
	}
}
