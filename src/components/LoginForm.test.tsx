import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { LoginForm } from './LoginForm';

describe('LoginForm tests', () => {
	describe('validateForm()', () => {
		test('returns true if there are errors', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			const loginFormInstance : any = loginForm.instance();
			const inputState = { email: '', password: '', errorMessages: ['Error1','Error2'] };
			jest.spyOn(loginFormInstance, 'validateForm');

			const result : boolean = loginFormInstance.validateForm(inputState);

			expect(result).to.eql(true);
		});
		test('Button enables if email and password are correct length', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			const loginFormInstance : any = loginForm.instance();
			loginFormInstance.setState({ email: 'billy@email.com', password: 'fakepass' });
			
			loginFormInstance.validateForm(loginFormInstance.state);

			expect(loginFormInstance.state.buttonDisable).to.eql(false);
		});
	});
});
