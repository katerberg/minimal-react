import * as React from 'react';
import { Button, Form, InputProps, Input, FormGroup, Label } from 'reactstrap';
import { FieldForForm } from './FieldForForm';
import axios from 'axios';


export class GenericForm extends React.Component<{},{ error: string[], values: any, email: string, password: string, buttonDisable: boolean }> {
	constructor(props: any) {
		super(props);

this.state = {
			error: [],
			email: '',
			password: '',
			values: undefined,
			buttonDisable: true
		};

		this.submitForm = this.submitForm.bind(this);
	}

	handleChange = (value: string, key: string) => {
		if (key === 'email'){
			this.setState({ email: value});
		}
		else if (key === 'password'){
			this.setState({ password: value});
		}
	}

	public render(): JSX.Element {
		return (
			<Form onSubmit={this.submitForm} noValidate={true}>
				<div className="container">
					{/* TODO - render fields */}
					<FormGroup>
						<Label>Email: </Label>
						<Input
							id="email"
							type="text"
							onChange={(event) => this.handleChange(event.target.value, 'email')}
							onBlur={(event) => this.validateForm()}
							className="form-control"
						/>
					</FormGroup>
					<FormGroup>
						<Label>Password: </Label>
						<Input
							id="password"
							type="password"
							onChange={(event) => this.handleChange(event.target.value, 'password')}
							onBlur={(event) => this.validateForm()}
							className="form-control"
						/>
					</FormGroup>
					<div className="form-group">
						<Button
							type="submit"
							className="btn btn-primary"
							disabled={this.state.buttonDisable}
						>
							Submit
						</Button>
					</div>
				</div>
			</Form>
		);
	}

	/**
	 * Returns whether there are any errors in the errors object that is passed in
	 * @param {IErrors} errors - The field errors
	 */
	private haveErrors(error: string) {
		//tslint:disable-line
		let haveError: boolean = false;
		if (error.length > 0) {
			haveError = true;
		}
		return haveError;
	}


	/**
	 * Executes the validation rules for all the fields on the form and sets the error state
	 * @returns {boolean} - Whether the form is valid or not
	 */
	private validateForm(): boolean {
		let errors : boolean = false;
		let errorMessages : string[] = [];
		if (!(this.state.email.length > 0)) {
			errorMessages.push("Email must be populated.");
		}
		if (!(this.state.password.length > 5)) {
			errorMessages.push("Password must be longer than 5 characters.");
		}
		if (errorMessages.length > 0){
			errors = true;
		}
		this.setState({buttonDisable: errors});
		return errors;
	}

	private submitForm(): boolean {
		// const validationErrors: string[] = this.validateForm();

		const user = {
	email: this.state.email,
	password: this.state.password
};

		axios.post(`https://localhost:8080/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

		return true;
	}
}
