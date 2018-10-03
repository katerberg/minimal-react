import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Input, Label } from 'reactstrap';
import { SearchComponent } from './SearchComponent';

describe('<SearchComponent>', () => {
	it('renders both the word "Search" and <Input>', () => {
		const wrapper: ShallowWrapper = shallow(<SearchComponent searchByLetter={()=>"Hello"}/>);
		expect(wrapper.contains(<Label>Search</Label>)).to.equal(true);
		expect(wrapper.contains(<Input />)).to.equal(true);
	});
});
