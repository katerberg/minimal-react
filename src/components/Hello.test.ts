import { expect } from 'chai';
import 'mocha';
import { Hello } from './Hello';

describe('Hello', () => {
	it('exists', () => {
		const hello = new Hello({ compiler: 'blah', framework: 'foo' });

		expect(hello).to.exist;
	});
});
