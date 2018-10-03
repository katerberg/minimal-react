import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { MainComponent, IEmployee } from './MainComponent';
import { SearchComponent } from './SearchComponent';
import { PeopleList } from './PeopleList';

describe('<MainComponent>', () => {
  it('renders both <SearchComponent> and <PeopleList>', () => {
    const wrapper: ShallowWrapper = shallow(<MainComponent />);
    expect(wrapper.contains(<SearchComponent />)).to.equal(true);
    expect(wrapper.contains(<PeopleList />)).to.equal(true);
  });
});
