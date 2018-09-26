import * as React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export interface IFieldProps {
	/* The unique field name */
	id: string;

	/* The label text for the field */
	label?: string;

	/* The type of field we want to use */
	fieldType: string;
}

export class FieldForForm extends React.Component<IFieldProps, {}> {
	public render(): JSX.Element {
		return (
			<div className="form-group">
				<FormGroup>
					<Label>
						{this.props.label && (
							<label htmlFor={this.props.id}>{this.props.label}</label>
						)}
					</Label>
					<Input
						id={this.props.id}
						fieldType={this.props.fieldType}
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
			</div>
		);
	}
}
