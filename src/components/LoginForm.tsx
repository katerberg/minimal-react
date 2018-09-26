import * as React from 'react';
import { FieldForForm } from './FieldForForm';
import { GenericForm } from './GenericForm';
export class LoginForm extends React.Component<{}, {}> {
	private letters: string;

	public render(): JSX.Element {
		return (
			<GenericForm />
		);
	}
}
