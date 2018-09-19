import * as React from 'react';
import { shallow } from 'enzyme';
import { Hello } from './Hello';

describe('Hello', () => {
	test('Starts with hello from blah and foo', () => {
		const hello = shallow(<Hello compiler="blah" framework="foo" />);

		expect(hello.text()).toMatch(/^Hello from blah and foo!/);
	});

	test('Click me! exists', () => {
		const hello = shallow(<Hello compiler="blah" framework="foo" />);

		expect(hello.text()).toMatch(/Click me!$/);
	});
});
