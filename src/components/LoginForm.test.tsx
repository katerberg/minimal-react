import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { LoginForm } from './LoginForm';

describe('LoginForm tests', () => {
	describe('validateForm()', () => {
		test('returns true if there are errors', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			console.log(loginForm)
			loginForm.instance().setState({ errorMessages: ['hello'] });
			console.log(Object.keys(loginForm.instance()))
			// expect(loginForm.instance().validateForm({ errorMessages: ["Error1", "Error2"]})).to.eql(true);
		});
	});
});
