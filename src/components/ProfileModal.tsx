import * as React from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Letter } from './Letter';

export interface IProfileProps {
	names: string;
}

export class ProfileModal extends React.Component<
	IProfileProps,
	{ modal: boolean }
> {
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
			<div>
				<Button color="danger" onClick={this.toggle}>
					{this.props.names}
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>
						{this.props.names + "'s Profile"}
					</ModalHeader>
					<ModalBody style={{ textAlign: 'center' }}>
						<div className="moduleBody">
							<span>
								<img
									src="https://placeimg.com/150/150/animals"
									className="rounded-circle"
								/>
							</span>
							<h2>{this.props.names}</h2>
							<h3>Email</h3>
							<h3>ID #</h3>
							<h3>Pronoun</h3>
							<p>
								Most doctors agree that bicycle skiing.is a blue form of
								exercise that benefits trashcans.of all ages. Riding a bicycle
								enables you to develop your foot.muscles as well as
								quickly.increase the rate of your big toe tonail beat. Bicycle
								riding is also a dirty.means of empty cup. More trees.around the
								world run.bicycles than drive man buns. No matter what kind of
								door.you ride, always be sure to wear a santa's beard.on your
								head and have reflectors on your eye, especially if you spy.at
								night.
							</p>
						</div>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
