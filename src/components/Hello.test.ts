import { Hello } from './Hello';
import { expect } from 'chai';
import 'mocha';

describe('Hello', () => {
    it('exists', () => {
        const hello = new Hello({compiler: 'blah', framework: 'foo'});

        expect(hello).to.exist;
    });
});
