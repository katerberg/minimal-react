import * as React from 'react';
import {shallow} from 'enzyme';
import { PeopleList } from './PeopleList';

describe('PeopleList', () => {
  describe('filterNames()', () => {
    test('Filters names by letter test', () => {
        const peopleList = new PeopleList();
        const name: String[] = ["Cole", "Jose"];
        const letter: String = "C";

        var filteredNames = peopleList.filterNames(name, letter);

        expect(filteredNames).toContain('Cole');
        expect(filteredNames.length).toEqual(1);
    });

    test('Alphabetizes names after filtering', () => {
        const peopleList = new PeopleList();
        const name: String[] = ["Cole", "Jose", "Jennifer"];
        const letter: String = "J";

        var filteredNames = peopleList.filterNames(name, letter);

        expect(filteredNames).toEqual(['Jennifer', 'Jose']);
    });

    test('Handles Capitalization', () => {
        const peopleList = new PeopleList();
        const name: String[] = ["Cole", "Jose", "jennifer"];
        const letter: String = "J";

        var filteredNames = peopleList.filterNames(name, letter);

        expect(filteredNames).toEqual(['Jennifer', 'Jose']);
    });

    test('Handles multiword first names', () => {
        const peopleList = new PeopleList();
        const name: String[] = ["Mary Ann", "Mary", "Matt"];
        const letter: String = "M";

        var filteredNames = peopleList.filterNames(name, letter);

        expect(filteredNames).toEqual(['Mary', 'Mary Ann', 'Matt']);
    });

    test('Handles missing names', () => {
        const peopleList = new PeopleList();
        const name: String[] = ["", null, "Jose", "Quarterly"];
        const letter: String = "Q";

        var filteredNames = peopleList.filterNames(name, letter);

        expect(filteredNames).toEqual(['Quarterly']);
    });
  });
});
