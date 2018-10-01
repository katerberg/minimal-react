import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Letter } from './Letter';
import { PeopleList } from './PeopleList';
import { ProfileModal } from './ProfileModal';

describe('Letter', () => {
	test('Shows letters larger than names', () => {
		const letter: ShallowWrapper = shallow(
			<Letter letter="Q" employees={[{ _id: 'Q', phone: '', email: '', name: 'Quincy' }]} />
		);
		expect(letter.contains(<h1>Q</h1>)).to.equal(true);
		expect(
			letter.contains(
				<li key="Q">
					<ProfileModal name={'Quincy'} />
				</li>
			)
		).to.equal(true);
	});
	test('Displays no list when there are no names for that letter', () => {
		const letter: ShallowWrapper = shallow(<Letter letter="Q" employees={[]} />);
		expect(letter.contains(<h1>Q</h1>)).to.equal(true);
		expect(letter.contains(<ul />)).to.equal(true);
	});
	test('Displays line under each letter', () => {
		const letter: ShallowWrapper = shallow(<Letter letter="Q" employees={[]} />);
		expect(letter.contains(<hr />)).to.equal(true);
	});
});
