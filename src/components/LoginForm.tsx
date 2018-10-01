import * as React from 'react';
import { Button, Form, Input, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

export interface LoginFormState {
	emailErrors: string[],
	passwordErrors: string[],
	email: string,
	password: string,
	buttonDisable: boolean
}

export class LoginForm extends React.Component<{},LoginFormState> {
	constructor(props: any) {
		super(props);

		this.state = {
			emailErrors: [],
			passwordErrors: [],
			email: '',
			password: '',
			buttonDisable: true
		};

		this.submitForm = this.submitForm.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.validatePassword = this.validatePassword.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	private handleChange(value: string, key: string) : void {
		if (key === 'email'){
			this.setState({ email: value});
		}
		else if (key === 'password'){
			this.setState({ password: value});
		}
	}

	public render(): JSX.Element {
		return (
			<Form onSubmit={this.submitForm} noValidate={false}>
				<div className="container">
					{/* TODO - render fields */}
					<FormGroup>
						<Label>Email: </Label>
						<Input
							id="email"
							type="email"
							onChange={(event) => {
								this.handleChange(event.target.value, 'email')}}
							onBlur={(event) => this.validateEmail(this.state)}
							className="form-control"
						/>
					</FormGroup>
					<FormGroup>
						<Label>Password: </Label>
						<Input
							id="password"
							type="password"
							onFocus={(event) => this.handleChange(event.target.value, 'password')}
							onChange={(event) => {
								this.handleChange(event.target.value, 'password');
								this.validatePassword(this.state);
							}}
							className="form-control"
						/>
					</FormGroup>
					<div className="form-group">
						<Button
							type="submit"
							className="btn btn-success"
							disabled={this.state.buttonDisable}
						>
							Submit
						</Button>
						{ this.state.emailErrors.map((emErr: string) => (
								<p key={emErr}>{emErr}</p>
						))}
						{
						this.state.passwordErrors.map((pwErr: string) => (
								<p key={pwErr}>{pwErr}</p>
						))}

					</div>
				</div>
			</Form>
		);
	}

	// private validateForm( formState : LoginFormState ): boolean {
	// 	this.setState({ errorMessages: [] });
	//
	// 	let errors : boolean = false;
	// 	let errorMessages : string[] = [];
	//
	// 	if (!(formState.email.length > 4)) {
	// 		errorMessages.push("Email must be longer than 4 characters.");
	// 	}
	// 	if (!(formState.password.length > 3)) {
	// 		errorMessages.push("Password must be longer than 5 characters.");
	// 	}
	// 	if (errorMessages.length > 0){
	// 		errors = true;
	// 	}
	//
	// 	this.setState({ errorMessages: errorMessages });
	// 	this.setState({ buttonDisable: errors });
	//
	// 	return errors;
	// }

	private validateEmail( formState : LoginFormState ): void {
		this.setState({ emailErrors: [] });

		let errors : boolean = false;
		let emailErrors : string[] = [];

		if (!(formState.email.length > 4)) {
			emailErrors.push("Email must be longer than 4 characters.");
		}

		if (emailErrors.length > 0){
			errors = true;
		}

		this.setState({ emailErrors: emailErrors });
		this.setState({ buttonDisable: errors });

	}

	private validatePassword( formState : LoginFormState ): void {
		this.setState({ passwordErrors: [] });

		let errors : boolean = false;
		let passwordErrors : string[] = [];

		if (formState.password.length < 3) {
			passwordErrors.push("Password must be longer than 4 characters.");
		}

		if (passwordErrors.length > 0){
			errors = true;
		}

		this.setState({ emailErrors: passwordErrors });
		this.setState({ buttonDisable: errors });

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
