import { shallow } from 'enzyme';
import * as React from 'react';
import { expect } from 'chai';
import { PeopleList } from './PeopleList';
import { Letter } from './Letter';

describe('PeopleList', () => {
	describe('filterNames()', () => {
		test('Filters names by letter test', () => {
			const name: string[] = ['Cole', 'Jose'];
			const letter: string = 'C';
			const peopleList = new PeopleList(name, letter);

			const filteredNames = peopleList.filterNames(name, letter);

			expect(filteredNames).to.contain('Cole');
			expect(filteredNames.length).to.eql(1);
		});

		test('Alphabetizes names after filtering', () => {
			const name: string[] = ['Cole', 'Jose', 'Jennifer'];
			const letter: string = 'J';
			const peopleList = new PeopleList(name, letter);

			const filteredNames = peopleList.filterNames(name, letter);

			expect(filteredNames).to.eql(['Jennifer', 'Jose']);
		});

		test('Handles Capitalization', () => {
			const name: string[] = ['Cole', 'Jose', 'jennifer'];
			const letter: string = 'J';
			const peopleList = new PeopleList(name, letter);

			const filteredNames = peopleList.filterNames(name, letter);

			expect(filteredNames).to.eql(['Jennifer', 'Jose']);
		});

		test('Handles multiword first names', () => {
			const name: string[] = ['Mary Ann', 'Mary', 'Matt'];
			const letter: string = 'M';
			const peopleList = new PeopleList(name, letter);

			const filteredNames = peopleList.filterNames(name, letter);

			expect(filteredNames).to.eql(['Mary', 'Mary Ann', 'Matt']);
		});

		test('Handles missing names', () => {
			const name: string[] = ['', null, 'Jose', 'Quarterly'];
			const letter: string = 'Q';
			const peopleList = new PeopleList(name, letter);

			const filteredNames = peopleList.filterNames(name, letter);

			expect(filteredNames).to.eql(['Quarterly']);
		});
	});


	test ('returns all letters in the Alphabet', () => {
		const whatever = shallow(<PeopleList/>);
		expect(whatever.find(Letter)).to.have.lengthOf(26);
	})
});
