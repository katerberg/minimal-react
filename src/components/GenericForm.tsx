import * as React from 'react';
import { Button, Form } from 'reactstrap';
import { FieldForForm } from './FieldForForm';

export interface IGenericFormState {
	/* The field values */
	values: any; //tslint:disable-line

	/* The field validation error messages */
	errors: string[];

	/* Whether the form has been successfully submitted */
	submitSuccess?: boolean;
}

export class GenericForm extends React.Component<IGenericFormState> {
	constructor(props: IGenericFormState) {
		super(props);

		const errors: string[] = this.props.errors;
		const values: any = this.props.values; //tslint:disable-line
		this.state = {
			errors,
			values,
		};
	}

	public render(): JSX.Element {
		return (
			<Form onSubmit={this.submitForm} noValidate={true}>
				<div className="container">
					{/* TODO - render fields */}
					<FieldForForm id="name" label="Login Name" fieldType="text" />
					<FieldForForm id="password" label="Login Password" fieldType="text" />
					<div className="form-group">
						<Button
							type="submit"
							className="btn btn-primary"
							disabled={this.haveErrors(this.props.errors)}
						>
							Submit
						</Button>
					</div>
					{this.props.submitSuccess && (
						<div className="alert alert-info" role="alert" />
					)}
					{this.props.submitSuccess === false &&
						!this.haveErrors(this.props.errors) && (
							<div className="alert alert-danger" role="alert">
								Incorrect user name or password.
							</div>
						)}
					{this.props.submitSuccess === false &&
						this.haveErrors(this.props.errors) && (
							<div className="alert alert-danger" role="alert">
								Incorrect user name or password.
							</div>
						)}
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
