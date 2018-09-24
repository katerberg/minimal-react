import { shallow } from 'enzyme';
import * as React from 'react';
import { PeopleList } from './PeopleList';

describe('PeopleList', () => {
	describe('filterNames()', () => {
		test('Filters names by letter test', () => {
			const name: string[] = ['Cole', 'Jose'];
			const letter: string = 'C';
			const peopleList = new PeopleList(name, letter);

			const filteredNames = peopleList.filterNames(name, letter);

			expect(filteredNames).toContain('Cole');
			expect(filteredNames.length).toEqual(1);
		});

		test('Alphabetizes names after filtering', () => {
			const name: string[] = ['Cole', 'Jose', 'Jennifer'];
			const letter: string = 'J';
			const peopleList = new PeopleList(name, letter);

			const filteredNames = peopleList.filterNames(name, letter);

			expect(filteredNames).toEqual(['Jennifer', 'Jose']);
		});

		test('Handles Capitalization', () => {
			const name: string[] = ['Cole', 'Jose', 'jennifer'];
			const letter: string = 'J';
			const peopleList = new PeopleList(name, letter);

			const filteredNames = peopleList.filterNames(name, letter);

			expect(filteredNames).toEqual(['Jennifer', 'Jose']);
		});

		test('Handles multiword first names', () => {
			const name: string[] = ['Mary Ann', 'Mary', 'Matt'];
			const letter: string = 'M';
			const peopleList = new PeopleList(name, letter);

			const filteredNames = peopleList.filterNames(name, letter);

			expect(filteredNames).toEqual(['Mary', 'Mary Ann', 'Matt']);
		});

		test('Handles missing names', () => {
			const name: string[] = ['', null, 'Jose', 'Quarterly'];
			const letter: string = 'Q';
			const peopleList = new PeopleList(name, letter);

			const filteredNames = peopleList.filterNames(name, letter);

			expect(filteredNames).toEqual(['Quarterly']);
		});
	});

	describe('parseNames()', () => {
		test('Returns list of names from list of objects', () => {
			const objects = {
				Worker: 'Adam Derenbecher',
				Phone: '+1 (314) 609-6484 (Mobile)',
				'Email Address': 'adam.derenbecher@slalom.com (Adam Derenbecher)',
			};
		});
	});
});
