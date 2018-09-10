import * as React from 'react';
import {shallow} from 'enzyme';
import { Hello } from './Hello';

describe('Hello', () => {
    test('exists', () => {
        const hello = shallow(<Hello compiler="blah" framework="foo" />);

        expect(hello.text()).toEqual('Hello from blah and foo!');
    });

});
