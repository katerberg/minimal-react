import * as React from 'react';
import { Letter } from './Letter';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export interface IProfileProps {
	names: string;
}

export class ProfileModal extends React.Component<IProfileProps, { modal: boolean }> {

	  constructor(props : any) {
	    super(props);
	    this.state = {
	      modal: false
	    };

	    this.toggle = this.toggle.bind(this);
	  }

	  toggle() {
	    this.setState({
	      modal: !this.state.modal
	    });
	  }

	  render() {
	    return (
	      <div>
	        <Button color="danger" onClick={this.toggle}>{this.props.names}</Button>
	        <Modal isOpen={this.state.modal} toggle={this.toggle}>
	          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
	          <ModalBody>
	            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	          </ModalBody>
	          <ModalFooter>
	            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
	            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
	          </ModalFooter>
	        </Modal>
	      </div>
	    );
	  }
	}
