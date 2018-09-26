import * as React from 'react';
import { Button, Form, InputProps, Input, FormGroup, Label } from 'reactstrap';
import { FieldForForm } from './FieldForForm';
import axios from 'axios';


export class GenericForm extends React.Component<{},{ errors: string[], values: any, email: string, password: string }> {
	constructor(props: any) {
		super(props);

this.state = {
			errors: [],
			email: '',
			password: '',
			values: undefined
		};

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
							onChange={
								(e: React.FormEvent<HTMLInputElement>) => console.log('things') //tslint:disable-line
								/* TODO: push change to form values */
							} /* tslint:disable */
							onBlur={
								(e: React.FormEvent<HTMLInputElement>) => console.log('things')
								/* TODO: validate field value */
							}
							className="form-control"
						/>
					</FormGroup>
					<FormGroup>
						<Label>Password: </Label>
						<Input
							id="password"
							type="password"
							onChange={
								(e: React.FormEvent<HTMLInputElement>) => console.log('things') //tslint:disable-line
								/* TODO: push change to form values */
							} /* tslint:disable */
							onBlur={
								(e: React.FormEvent<HTMLInputElement>) => console.log('things')
								/* TODO: validate field value */
							}
							className="form-control"
						/>
						{console.log('things') /* TODO - display validation error */}
					</FormGroup>
					<div className="form-group">
						<Button
							type="submit"
							className="btn btn-primary"
							disabled={this.haveErrors(this.state.errors)}
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
	private haveErrors(errors: string[]) {
		//tslint:disable-line
		let haveError: boolean = false;
		if (errors.length > 0) {
			haveError = true;
		}
		return haveError;
	}
	/* tslint:disable */
	/**
	 * Handles form submission
	 * @param {React.FormEvent<HTMLFormElement>} e //tslint:disable-line
	 * private handleSubmit = async (
	 * e: React.FormEvent<HTMLFormElement>
	 * ): Promise<void> => {
	 *  e.preventDefault();
	 *
	 * if (this.validateForm()) {
	 * const submitSuccess: boolean = await this.submitForm();
	 *    this.setState({ submitSuccess });
	 *  }
	 * };
	 */

	/**
	 * Executes the validation rules for all the fields on the form and sets the error state
	 * @returns {boolean} - Whether the form is valid or not
	 */
	private validateForm(): string[] {
		// TODO - validate form
		return [];
	}

	private submitForm(): boolean {
		// TODO - validate form
		const validationErrors: string[] = this.validateForm();

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

	/**
	 * Submits the form to the http api
	 * @returns {boolean} - Whether the form submission was successful or not
	 */
	// private async submitForm(): Promise<boolean> {
	// 	// TODO - submit the form
	// 	return true;
	// }
}
