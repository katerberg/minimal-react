import axios, { AxiosResponse } from 'axios';
import * as React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export interface ILoginFormState {
	buttonDisable: boolean;
	email: string;
	emailErrors: string[];
	passwordErrors: string[];
	password: string;
}

export class LoginForm extends React.Component<{}, ILoginFormState> {
	constructor(props: object) {
		super(props);

		this.state = {
			buttonDisable: true,
			email: '',
			emailErrors: [],
			password: '',
			passwordErrors: [],
		};

		this.submitForm = this.submitForm.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.validatePassword = this.validatePassword.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	public render(): JSX.Element {
		return (
			<Form
				className="text-center"
				onSubmit={this.submitForm}
				noValidate={false}
			>
				<div className="container">
					{/* TODO - render fields */}
					<FormGroup>
						<Label>Email: </Label>
						<Input
							id="email"
							type="email"
							onBlur={this.handleEmailChange}
							className="form-control"
						/>
					</FormGroup>
					<FormGroup>
						<Label>Password: </Label>
						<Input
							id="password"
							type="password"
							onChange={this.handlePasswordChange}
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
						{this.state.emailErrors.map((emErr: string) => (
							<p key={emErr}>{emErr}</p>
						))}
						{this.state.passwordErrors.map((pwErr: string) => (
							<p key={pwErr}>{pwErr}</p>
						))}
					</div>
				</div>
			</Form>
		);
	}
	private handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
		this.handleChange(event.target.value, 'email');
		this.validateEmail(this.state);
	}
	private handlePasswordChange(
		event: React.ChangeEvent<HTMLInputElement>
	): void {
		this.handleChange(event.target.value, 'password');
		this.validatePassword(this.state);
	}
	private handleChange(value: string, key: string): void {
		if (key === 'email') {
			this.setState({ email: value });
		} else if (key === 'password') {
			this.setState({ password: value });
		}
	}

	private validateEmail(formState: ILoginFormState): boolean {
		this.setState({ emailErrors: [] });

		let errors: boolean = false;
		const emailErrors: string[] = [];

		if (formState.email.length < 4) {
			emailErrors.push('Email must be longer than 4 characters.');
		}

		if (emailErrors.length > 0) {
			errors = true;
		}

		this.setState({ emailErrors });
		this.setState({ buttonDisable: errors });

		return errors
	}

	private validatePassword(formState: ILoginFormState): boolean {
		this.setState({ passwordErrors: [] });

		let errors: boolean = false;
		const passwordErrors: string[] = [];

		if (formState.password.length < 3) {
			passwordErrors.push('Password must be longer than 4 characters.');
		}

		if (passwordErrors.length > 0) {
			errors = true;
		}

		this.setState({ passwordErrors });
		this.setState({ buttonDisable: errors });
		return errors
	}

	private submitForm(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault();

		const user: object = {
			email: this.state.email,
			password: this.state.password,
		};

		axios
			.post(`http://localhost:3000/api/login`, { user })
			.then((res: AxiosResponse) => {
				alert(res);
				alert(res.data);
			});
	}
}
