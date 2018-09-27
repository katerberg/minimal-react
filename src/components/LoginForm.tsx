import * as React from 'react';
import { Button, Form, Input, FormGroup, Label } from 'reactstrap';
import axios from 'axios';


export class LoginForm extends React.Component<{},{ errorMessages: string[], email: string, password: string, buttonDisable: boolean }> {
	constructor(props: any) {
		super(props);

		this.state = {
			errorMessages: [],
			email: '',
			password: '',
			buttonDisable: true
		};

		this.submitForm = this.submitForm.bind(this);
		this.validateForm = this.validateForm.bind(this);
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
			<Form onSubmit={this.submitForm} noValidate={true}>
				<div className="container">
					{/* TODO - render fields */}
					<FormGroup>
						<Label>Email: </Label>
						<Input
							id="email"
							type="email"
							onChange={(event) => this.handleChange(event.target.value, 'email')}
							onBlur={(event) => this.validateForm(this.state)}
							className="form-control"
						/>
					</FormGroup>
					<FormGroup>
						<Label>Password: </Label>
						<Input
							id="password"
							type="password"
							onChange={(event) => this.handleChange(event.target.value, 'password')}
							onBlur={(event) => this.validateForm(this.state)}
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
						{ this.state.errorMessages.map((errorMessage: string) => (
								<p key={errorMessage}>{errorMessage}</p>
						))}
					</div>
				</div>
			</Form>
		);
	}

	private validateForm( formState : any ): boolean {
		this.setState({ errorMessages: [] });

		let errors : boolean = false;
		let errorMessages : string[] = [];

		if (!(formState.email.length > 4)) {
			errorMessages.push("Email must be populated.");
		}
		if (!(formState.password.length > 5)) {
			errorMessages.push("Password must be longer than 5 characters.");
		}
		if (errorMessages.length > 0){
			errors = true;
		}

		this.setState({ errorMessages: errorMessages });
		this.setState({ buttonDisable: errors });

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
