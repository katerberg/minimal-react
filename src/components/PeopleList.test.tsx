import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Letter } from './Letter';
import { Employee, PeopleList } from './PeopleList';

describe('PeopleList', () => {
	describe('filterNames()', () => {
		test('Filters names by letter test', () => {
			const employeeToFind: Employee = {
				_id: '5bad03ddcf3fa4426a048ce7',
				email: 'adrienne.costello@slalom.com (Adrienne Costello)',
				name: 'Adrienne Costello',
				phone: '',
			};
			const name: Employee[] = [
				{
					_id: '5bad03ddcf3fa4426a048ce6',
					email: 'adam.etchason@slalom.com (Adam Etchason)',
					name: 'Dadam Etchason',
					phone: '',
				},
				employeeToFind,
			];
			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: Employee[] = peopleList.filterNames(name, letter);

			expect(filteredNames).to.contain(employeeToFind);
			expect(filteredNames.length).to.eql(1);
		});

		test('Alphabetizes names after filtering', () => {
			const adrienne: Employee = {
				_id: '5bad03ddcf3fa4426a048ce7',
				email: 'adrienne.costello@slalom.com (Adrienne Costello)',
				name: 'Adrienne Costello',
				phone: '',
			};
			const adam: Employee = {
				_id: '5bad03ddcf3fa4426a048ce6',
				email: 'adam.etchason@slalom.com (Adam Etchason)',
				name: 'Adam Etchason',
				phone: '',
			};
			const employees: Employee[] = [adrienne, adam];

			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: Employee[] = peopleList.filterNames(employees, letter);
			expect(filteredNames).to.eql([adam, adrienne]);
		});

		test('Does not rearrange people with the same name', () => {
			const adam: Employee = {
				_id: '1',
				email: 'adam.etchason@slalom.com (Adam Etchason)',
				name: 'Adam Etchason',
				phone: '',
			};
			const otherAdam: Employee = {
				_id: '2',
				email: 'other.adam.etchason@slalom.com (Adam Etchason)',
				name: 'Adam Etchason',
				phone: '',
			};
			const employees: Employee[] = [otherAdam, adam];

			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: Employee[] = peopleList.filterNames(employees, letter);
			expect(filteredNames).to.eql([otherAdam, adam]);
		});

		test('Handles Capitalization', () => {
			const name: Employee[] = [
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
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: Employee[] = peopleList.filterNames(name, letter);

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
			const adrienne: Employee = {
				_id: '5bad03ddcf3fa4426a048ce7',
				email: 'adrienne.costello@slalom.com (Adrienne Costello)',
				name: 'Adrienne May Costello',
				phone: '',
			};
			const adam: Employee = {
				_id: '5bad03ddcf3fa4426a048ce6',
				email: 'adam.etchason@slalom.com (Adam Etchason)',
				name: 'Adam Etchason',
				phone: '',
			};
			const amy: Employee = {
				_id: '1bad03ddcf3fa4426a048ce6',
				email: 'adam.etchason@slalom.com (Adam Etchason)',
				name: 'Amy Etchason',
				phone: '',
			};
			const employees: Employee[] = [amy, adrienne, adam];

			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: Employee[] = peopleList.filterNames(employees, letter);

			expect(filteredNames).to.eql([adam, adrienne, amy]);
		});

		test('Handles missing names', () => {
			const employeeToFind: Employee = {
				_id: '5bad03ddcf3fa4426a048ce7',
				email: 'adrienne.costello@slalom.com (Adrienne Costello)',
				name: 'Adrienne Costello',
				phone: '',
			};
			const name: Employee[] = [
				{ _id: '5bad03ddcf3fa4426a048ce6', name: '', phone: '', email: 'adam.etchason@slalom.com (Adam Etchason)' },
				employeeToFind,
			];
			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: Employee[] = peopleList.filterNames(name, letter);

			expect(filteredNames).to.eql([employeeToFind]);
		});
		// });

		test('returns all letters in the Alphabet', () => {
			const peopleList: ShallowWrapper = shallow(<PeopleList />);
			expect(peopleList.find(Letter)).to.have.lengthOf(26);
		});
	});
});
