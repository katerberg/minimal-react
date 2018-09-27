import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Modal } from 'reactstrap';
import { ProfileModal } from './ProfileModal';

describe('<ProfileModal>', () => {
	it('renders <Modal>', () => {
		const wrapper: ShallowWrapper = shallow(<ProfileModal names={''} />);
		expect(wrapper.find(Modal).length).to.eql(1);
	});

	it('opens modal when button is clicked', () => {
		const wrapper: ShallowWrapper = shallow(<ProfileModal names={''} />);

		wrapper.find('Button').simulate('click');
		expect(wrapper.find(Modal).prop('isOpen')).to.eql(true);
	});
});
