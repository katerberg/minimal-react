import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Letter } from './Letter';
import { PeopleList } from './PeopleList';

describe('PeopleList', () => {
	describe('filterNames()', () => {
		test('Filters names by letter test', () => {
			const name: string[] = ['Cole', 'Jose'];
			const letter: string = 'C';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: string[] = peopleList.filterNames(name, letter);

			expect(filteredNames).to.contain('Cole');
			expect(filteredNames.length).to.eql(1);
		});

		test('Alphabetizes names after filtering', () => {
			const name: string[] = ['Cole', 'Jose', 'Jennifer'];
			const letter: string = 'J';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: string[] = peopleList.filterNames(name, letter);

			expect(filteredNames).to.eql(['Jennifer', 'Jose']);
		});

		test('Handles Capitalization', () => {
			const name: string[] = ['Cole', 'Jose', 'jennifer'];
			const letter: string = 'J';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: string[] = peopleList.filterNames(name, letter);

			expect(filteredNames).to.eql(['Jennifer', 'Jose']);
		});

		test('Handles multiword first names', () => {
			const name: string[] = ['Mary Ann', 'Mary', 'Matt'];
			const letter: string = 'M';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: string[] = peopleList.filterNames(name, letter);

			expect(filteredNames).to.eql(['Mary', 'Mary Ann', 'Matt']);
		});

		test('Handles missing names', () => {
			const name: string[] = ['', null, 'Jose', 'Quarterly'];
			const letter: string = 'Q';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: string[] = peopleList.filterNames(name, letter);

			expect(filteredNames).to.eql(['Quarterly']);
		});
	});

	test('returns all letters in the Alphabet', () => {
		const peopleList: ShallowWrapper = shallow(<PeopleList />);
		expect(peopleList.find(Letter)).to.have.lengthOf(26);
	});
});
