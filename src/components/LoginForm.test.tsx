import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { LoginForm } from './LoginForm';

describe('LoginForm tests', () => {
	describe('validateForm()', () => {
		test('returns true if there are errors', () => {
      const loginForm : LoginForm = new LoginForm({});
			expect(loginForm.validateForm({ errorMessages: ["Error1", "Error2"]})).to.eql(true);
		});
	});
});
