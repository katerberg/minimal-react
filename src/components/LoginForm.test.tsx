import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { LoginForm } from './LoginForm';
import { Input } from 'reactstrap';

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
		test('Displays error messages from state', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);

			loginForm.setState({ errorMessages: ['Error1','Error2'] });

			expect(loginForm.contains('Error1')).to.equal(true);
			expect(loginForm.contains('Error3')).to.equal(false);
		});
	});

	describe('handleChange()', () => {
		test('Sets email in state when user inputs email in form', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			loginForm.find('#email').simulate('change', {target:
				{name: 'email', value: 'billy@email.com'}
			})

			expect(loginForm.state('email')).to.eql('billy@email.com');
		});
		test('Sets password in state when user inputs password in form', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			loginForm.find('#password').simulate('change', {target:
				{name: 'password', value: 'fakepass'}
			})

			expect(loginForm.state('password')).to.eql('fakepass');
		});
	});

	describe('render()', () => {
		test('Displays two input form fields', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			expect(loginForm.find(Input)).to.have.lengthOf(2);
		});
	});
});
