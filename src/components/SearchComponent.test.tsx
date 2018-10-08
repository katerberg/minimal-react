import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Input, Label } from 'reactstrap';
import { SearchComponent } from './SearchComponent';

describe('<SearchComponent>', () => {
	it.only('renders both the word "Search" and <Input>', () => {
		const wrapper: ShallowWrapper = shallow(<SearchComponent searchByLetter={() => 'Hello'} />); // tslint:disable-line
		const props: any = wrapper.instance().props; // tslint:disable-line
		expect(wrapper.contains(<Label>Search</Label>)).to.equal(true);
		expect(wrapper.contains(<Input type="text" maxLength={1} onKeyUp={props.searchByLetter} />)).to.equal(true);
	});
});
