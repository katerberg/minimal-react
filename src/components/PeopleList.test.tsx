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
				name: 'Adrienne Costello',
				phone: '',
				email: 'adrienne.costello@slalom.com (Adrienne Costello)',
			};
			const name: Employee[] = [
				{
					_id: '5bad03ddcf3fa4426a048ce6',
					name: 'Dadam Etchason',
					phone: '',
					email: 'adam.etchason@slalom.com (Adam Etchason)',
				},
				employeeToFind,
			];
			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: Employee[] = peopleList.filterNames(name, letter);

			expect(filteredNames).to.contain(employeeToFind);
			expect(filteredNames.length).to.eql(1);
		});

		// 		test('Alphabetizes names after filtering', () => {
		// // 			const employee2:Employee = {"_id":"5bad03ddcf3fa4426a048ce7","name":"Adrienne Costello","phone":"","email":"adrienne.costello@slalom.com (Adrienne Costello)"};
		// // const employee1:Employee = {"_id":"5bad03ddcf3fa4426a048ce6","name":"Adam Etchason","phone":"","email":"adam.etchason@slalom.com (Adam Etchason)"};
		// const name: Employee[] = [{"_id":"5bad03ddcf3fa4426a048ce7","name":"Adrienne Costello","phone":"","email":"adrienne.costello@slalom.com (Adrienne Costello)"}, {"_id":"5bad03ddcf3fa4426a048ce6","name":"Adam Etchason","phone":"","email":"adam.etchason@slalom.com (Adam Etchason)"}];
		//
		// 			// const name: Employee[] = [employee2,employee1];
		// 			const letter: string = 'A';
		// 			const peopleList: PeopleList = new PeopleList({});
		//
		// 			const filteredNames: Employee[] = peopleList.filterNames(name, letter);
		//
		// 			expect(filteredNames).to.eql([{"_id":"5bad03ddcf3fa4426a048ce6","name":"Adam Etchason","phone":"","email":"adam.etchason@slalom.com (Adam Etchason)"},{"_id":"5bad03ddcf3fa4426a048ce7","name":"Adrienne Costello","phone":"","email":"adrienne.costello@slalom.com (Adrienne Costello)"}]);
		// 		});

		test('Handles Capitalization', () => {
			const name: Employee[] = [
				{
					_id: '5bad03ddcf3fa4426a048ce6',
					name: 'adam Etchason',
					phone: '',
					email: 'adam.etchason@slalom.com (Adam Etchason)',
				},
				{
					_id: '5bad03ddcf3fa4426a048ce7',
					name: 'Adrienne Costello',
					phone: '',
					email: 'adrienne.costello@slalom.com (Adrienne Costello)',
				},
			];
			const letter: string = 'A';
			const peopleList: PeopleList = new PeopleList({});

			const filteredNames: Employee[] = peopleList.filterNames(name, letter);

			expect(filteredNames).to.eql([
				{
					_id: '5bad03ddcf3fa4426a048ce6',
					name: 'Adam Etchason',
					phone: '',
					email: 'adam.etchason@slalom.com (Adam Etchason)',
				},
				{
					_id: '5bad03ddcf3fa4426a048ce7',
					name: 'Adrienne Costello',
					phone: '',
					email: 'adrienne.costello@slalom.com (Adrienne Costello)',
				},
			]);
		});

		// test('Handles multiword first names', () => {
		// 	const name: string[] = ['Mary Ann', 'Mary', 'Matt'];
		// 	const letter: string = 'M';
		// 	const peopleList: PeopleList = new PeopleList({});
		//
		// 	const filteredNames: string[] = peopleList.filterNames(name, letter);
		//
		// 	expect(filteredNames).to.eql(['Mary', 'Mary Ann', 'Matt']);
		// });

		test('Handles missing names', () => {
			const employeeToFind: Employee = {
				_id: '5bad03ddcf3fa4426a048ce7',
				name: 'Adrienne Costello',
				phone: '',
				email: 'adrienne.costello@slalom.com (Adrienne Costello)',
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
