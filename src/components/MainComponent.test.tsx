import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { IEmployee, MainComponent } from './MainComponent';
import { PeopleList } from './PeopleList';
import { SearchComponent } from './SearchComponent';

describe('<MainComponent>', () => {
	it('renders both <SearchComponent> and <PeopleList>', () => {
		const wrapper: ShallowWrapper = shallow(<MainComponent />);
		expect(wrapper.contains(<SearchComponent searchByLetter={()=>"Hello"}/>)).to.equal(true);
		expect(wrapper.contains(<PeopleList employees={[]} letters={['A']}/>)).to.equal(true);
	});
});
