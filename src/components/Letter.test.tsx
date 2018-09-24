import { shallow } from 'enzyme';
import * as React from 'react';
import { expect } from 'chai';
import { PeopleList } from './PeopleList';
import { Letter } from './Letter';

describe('Letter', () => {
	test ('Shows letters larger than names', () => {
		const letter = shallow(<Letter letter='Q' names={['Quincy']}/>);
		expect(letter.contains(<h1>Q</h1>)).to.equal(true);
		expect(letter.contains(<li key='Quincy'>Quincy</li>)).to.equal(true);
	})
	test ('Displays no list when there are no names for that letter', () => {
		const letter = shallow(<Letter letter='Q' names={[]}/>);
		expect(letter.contains(<h1>Q</h1>)).to.equal(true);
		expect(letter.contains(<ul></ul>)).to.equal(true);
	})
	test ('Displays line under each letter', () => {
		const letter = shallow(<Letter letter='Q' names={[]}/>);
		expect(letter.contains(<hr/>)).to.equal(true);
	})
});
