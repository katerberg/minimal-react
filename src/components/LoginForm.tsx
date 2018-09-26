import * as React from 'react';
import { FieldForForm } from './FieldForForm';
import { GenericForm } from './GenericForm';
export class LoginForm extends React.Component<{}, {}> {
	private letters: string;

	public render(): JSX.Element {
		return (
			<GenericForm values="" errors={[]}>
				<React.Fragment>
					<div className="alert alert-info" role="alert">
						Enter the information below and we'll get back to you as soon as we
						can.
					</div>
					<FieldForForm id="name" label="Name" fieldType="text" />
				</React.Fragment>
			</GenericForm>
		);
	}
}
