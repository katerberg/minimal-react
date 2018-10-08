import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Label } from 'reactstrap';
import { IEmployee, MainComponent } from './MainComponent';
import { PeopleList } from './PeopleList';
import { SearchComponent } from './SearchComponent';

describe('<MainComponent>', () => {
	it('renders <PeopleList> and <SearchComponent>', () => {
		const wrapper: ShallowWrapper = shallow(<MainComponent />);
		expect(wrapper.find(PeopleList)).to.have.length(1);
		expect(wrapper.find(SearchComponent)).to.have.length(1);
	});
});
