import * as React from 'react';
import { Button, ListGroupItem, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Letter } from './Letter';
import './ProfileModal.scss';

export interface IProfileProps {
	email: string;
	name: string;
	phone: string;
}

export class ProfileModal extends React.Component<IProfileProps, { modal: boolean }> {
	constructor(props: IProfileProps) {
		super(props);
		this.state = {
			modal: false,
		};

		this.toggle = this.toggle.bind(this);
	}

	public toggle(): void {
		this.setState({
			modal: !this.state.modal,
		});
	}

	public render(): JSX.Element {
		return (
			<ListGroupItem tag="button" onClick={this.toggle} action={true} className="list-group-item">
				{this.props.name}
				<Modal isOpen={this.state.modal} toggle={this.toggle} className="profile-modal">
					<ModalHeader toggle={this.toggle}>
						<h2>{this.props.name}</h2>
					</ModalHeader>
					<ModalBody>
						<div className="modal-body">
							<span>
								<img src="https://placeimg.com/150/150/animals" className="rounded-circle" />
							</span>
							<h4>{this.props.name}</h4>
							<h5>{this.props.email}</h5>
							<h5>{this.props.phone}</h5>
							<p>
								Most doctors agree that bicycle skiing.is a blue form of exercise that benefits trashcans.of all ages.
								Riding a bicycle enables you to develop your foot.muscles as well as quickly.increase the rate of your
								big toe tonail beat. Bicycle riding is also a dirty.means of empty cup. More trees.around the world
								run.bicycles than drive man buns. No matter what kind of door.you ride, always be sure to wear a santa's
								beard.on your head and have reflectors on your eye, especially if you spy.at night.
							</p>
						</div>
					</ModalBody>
				</Modal>
			</ListGroupItem>
		);
	}
}
