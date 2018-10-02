import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Input } from 'reactstrap';
import { ILoginFormState} from './LoginForm';
import { LoginForm } from './LoginForm';

describe('LoginForm tests', () => {
	describe('validateForm()', () => {
		test('returns email errors', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			const loginFormInstance: any = loginForm.instance();
			const inputState: any = {
				email: '',
				emailErrors: [],
				passwordErrors: [],
				password: '',
			};

			jest.spyOn(loginFormInstance, 'validateEmail');
			const result: boolean = loginFormInstance.validateEmail(inputState);

			expect(result).to.eql(true);
		});

		test('returns password errors', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			const loginFormInstance: any = loginForm.instance();
			const inputState: any = {
				email: '',
				emailErrors: [],
				passwordErrors: [],
				password: '',
			};
			jest.spyOn(loginFormInstance, 'validatePassword');

			const result: boolean = loginFormInstance.validatePassword(inputState);

			expect(result).to.eql(true);
		});

		test('Button enables if email is the correct length', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			const loginFormInstance: any = loginForm.instance();
			loginFormInstance.setState({
				email: 'billy@email.com',
				password: 'fakepass',
			});
			loginFormInstance.validateEmail(loginFormInstance.state);

			expect(loginFormInstance.state.buttonDisable).to.eql(false);
		});

		test('Button enables if password is the correct length', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			const loginFormInstance: any = loginForm.instance();
			loginFormInstance.setState({
				email: 'billy@email.com',
				password: 'fakepass',
			});
			loginFormInstance.validatePassword(loginFormInstance.state);

			expect(loginFormInstance.state.buttonDisable).to.eql(false);
		});


		test('Displays email error messages from state', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);

			loginForm.setState({ emailErrors: ['Error1'] });

			expect(loginForm.contains('Error1')).to.equal(true);
			expect(loginForm.contains('Error3')).to.equal(false);
		});


		test('Displays password error messages from state', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);

			loginForm.setState({ passwordErrors: ['Error1'] });

			expect(loginForm.contains('Error1')).to.equal(true);
			expect(loginForm.contains('Error3')).to.equal(false);
		});
	});

	describe('handleChange()', () => {
		test('Sets email in state when user inputs email in form', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			loginForm.find('#email').simulate('change', {
				target: { name: 'email', value: 'billy@email.com' },
			});

			expect(loginForm.state('email')).to.eql('billy@email.com');
		});
		test('Sets password in state when user inputs password in form', () => {
			const loginForm: ShallowWrapper = shallow(<LoginForm />);
			loginForm.find('#password').simulate('change', {
				target: { name: 'password', value: 'fakepass' },
			});

			expect(loginForm.state('password')).to.eql('fakepass');
		});
	});

	// describe('render()', () => {
	// 	test('Displays two form inputs: one email and one password', () => {
	// 		const loginForm: ShallowWrapper = shallow(<LoginForm />);
	//
	// 		expect(loginForm.find(Input)).to.have.lengthOf(2);
	// 		expect(loginForm.find('#password')).to.have.lengthOf(1);
	// 		expect(loginForm.find('#email')).to.have.lengthOf(1);
	// 	});
	// });
});
