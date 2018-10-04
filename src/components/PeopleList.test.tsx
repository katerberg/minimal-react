import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Letter } from './Letter';
import { IEmployee } from './MainComponent';
import { PeopleList } from './PeopleList';

describe('PeopleList', () => {
	describe('filterNames()', () => {
		test('Filters names by letter test', () => {
			const employeeToFind: IEmployee = {
				_id: '5bad03ddcf3fa4426a048ce7',
				email: 'adrienne.costello@slalom.com (Adrienne Costello)',
				name: 'Adrienne Costello',
				phone: '',
			};
			const employees: IEmployee[] = [
				{
					_id: '5bad03ddcf3fa4426a048ce6',
					email: 'adam.etchason@slalom.com (Adam Etchason)',
					name: 'Dadam Etchason',
					phone: '',
				},
				employeeToFind,
			];
			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({ employees: this.employees, letters: [this.letter] });

			const filteredNames: IEmployee[] = peopleList.filterNames(employees, letter);

			expect(filteredNames).to.contain(employeeToFind);
			expect(filteredNames.length).to.eql(1);
		});

		test('Alphabetizes names after filtering', () => {
			const adrienne: IEmployee = {
				_id: '5bad03ddcf3fa4426a048ce7',
				email: 'adrienne.costello@slalom.com (Adrienne Costello)',
				name: 'Adrienne Costello',
				phone: '',
			};
			const adam: IEmployee = {
				_id: '5bad03ddcf3fa4426a048ce6',
				email: 'adam.etchason@slalom.com (Adam Etchason)',
				name: 'Adam Etchason',
				phone: '',
			};
			const employees: IEmployee[] = [adrienne, adam];

			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({ employees: this.employees, letters: [this.letter] });

			const filteredNames: IEmployee[] = peopleList.filterNames(employees, letter);
			expect(filteredNames).to.eql([adam, adrienne]);
		});

		test('Does not rearrange people with the same name', () => {
			const adam: IEmployee = {
				_id: '1',
				email: 'adam.etchason@slalom.com (Adam Etchason)',
				name: 'Adam Etchason',
				phone: '',
			};
			const otherAdam: IEmployee = {
				_id: '2',
				email: 'other.adam.etchason@slalom.com (Adam Etchason)',
				name: 'Adam Etchason',
				phone: '',
			};
			const employees: IEmployee[] = [otherAdam, adam];

			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({ employees: this.employees, letters: [this.letter] });

			const filteredNames: IEmployee[] = peopleList.filterNames(employees, letter);
			expect(filteredNames).to.eql([otherAdam, adam]);
		});

		test('Handles Capitalization', () => {
			const employees: IEmployee[] = [
				{
					_id: '5bad03ddcf3fa4426a048ce6',
					email: 'adam.etchason@slalom.com (Adam Etchason)',
					name: 'adam Etchason',
					phone: '',
				},
				{
					_id: '5bad03ddcf3fa4426a048ce7',
					email: 'adrienne.costello@slalom.com (Adrienne Costello)',
					name: 'Adrienne Costello',
					phone: '',
				},
			];
			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({ employees: this.employees, letters: [this.letter] });

			const filteredNames: IEmployee[] = peopleList.filterNames(employees, letter);

			expect(filteredNames).to.eql([
				{
					_id: '5bad03ddcf3fa4426a048ce6',
					email: 'adam.etchason@slalom.com (Adam Etchason)',
					name: 'Adam Etchason',
					phone: '',
				},
				{
					_id: '5bad03ddcf3fa4426a048ce7',
					email: 'adrienne.costello@slalom.com (Adrienne Costello)',
					name: 'Adrienne Costello',
					phone: '',
				},
			]);
		});

		test('Handles multiword first names', () => {
			const adrienne: IEmployee = {
				_id: '5bad03ddcf3fa4426a048ce7',
				email: 'adrienne.costello@slalom.com (Adrienne Costello)',
				name: 'Adrienne May Costello',
				phone: '',
			};
			const adam: IEmployee = {
				_id: '5bad03ddcf3fa4426a048ce6',
				email: 'adam.etchason@slalom.com (Adam Etchason)',
				name: 'Adam Etchason',
				phone: '',
			};
			const amy: IEmployee = {
				_id: '1bad03ddcf3fa4426a048ce6',
				email: 'adam.etchason@slalom.com (Adam Etchason)',
				name: 'Amy Etchason',
				phone: '',
			};
			const employees: IEmployee[] = [amy, adrienne, adam];

			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({ employees: this.employees, letters: [this.letter] });

			const filteredNames: IEmployee[] = peopleList.filterNames(employees, letter);

			expect(filteredNames).to.eql([adam, adrienne, amy]);
		});

		test('Handles missing names', () => {
			const employeeToFind: IEmployee = {
				_id: '5bad03ddcf3fa4426a048ce7',
				email: 'adrienne.costello@slalom.com (Adrienne Costello)',
				name: 'Adrienne Costello',
				phone: '',
			};
			const employees: IEmployee[] = [
				{ _id: '5bad03ddcf3fa4426a048ce6', name: '', phone: '', email: 'adam.etchason@slalom.com (Adam Etchason)' },
				employeeToFind,
			];
			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({ employees: this.employees, letters: [this.letter] });

			const filteredNames: IEmployee[] = peopleList.filterNames(employees, letter);

			expect(filteredNames).to.eql([employeeToFind]);
		});
	});

	test('returns all letters in the Alphabet', () => {
		const peopleList: ShallowWrapper = shallow(
			<PeopleList
				employees={[]}
				letters={[
					'A',
					'B',
					'C',
					'D',
					'E',
					'F',
					'G',
					'H',
					'I',
					'J',
					'K',
					'L',
					'M',
					'N',
					'O',
					'P',
					'Q',
					'R',
					'S',
					'T',
					'U',
					'V',
					'W',
					'X',
					'Y',
					'Z',
				]}
			/>
		);
		expect(peopleList.find(Letter)).to.have.lengthOf(26);
	});
});
