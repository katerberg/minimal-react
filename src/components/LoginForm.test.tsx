import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { LoginForm } from './LoginForm';

describe('LoginForm tests', () => {
	describe('validateForm()', () => {
		test('returns true if there are errors', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			const loginFormInstance : any = loginForm.instance();
			console.log(loginFormInstance instanceof LoginForm);
			const inputState = { email: '', password: '', errorMessages: ['Error1','Error2'] };
			spyOn(loginFormInstance, 'validateForm').and.callThrough();

			const result : boolean = loginFormInstance.validateForm(inputState);

			expect(result).to.eql(true);
		});
	});
});
