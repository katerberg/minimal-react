import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Hello } from './Hello';

describe('Hello', () => {
	test('Starts with hello from blah and foo', () => {
		const hello: ShallowWrapper = shallow(
			<Hello compiler="blah" framework="foo" />
		);

		expect(hello.text()).toMatch(/^Hello from blah and foo!/);
	});
});
