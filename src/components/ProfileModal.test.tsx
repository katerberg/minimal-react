import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Modal } from 'reactstrap';
import { IProfileProps, ProfileModal } from './ProfileModal';

describe('<ProfileModal>', () => {
	it('renders <Modal>', () => {
		const wrapper: ShallowWrapper = shallow(<ProfileModal name={''} email={''} phone={''} />);
		expect(wrapper.find(Modal).length).to.eql(1);
	});

	it('opens modal when button is clicked', () => {
		const wrapper: ShallowWrapper = shallow(<ProfileModal name={''} email={''} phone={''} />);

		wrapper.find('Button').simulate('click');
		expect(wrapper.find(Modal).prop('isOpen')).to.eql(true);
	});

	it('renders children when modal is open', () => {
		const wrapper: ShallowWrapper = shallow(
			<ProfileModal name={'Quincy'} email={'Quincy@test.com'} phone={'555-555-5555'} />
		);
		wrapper.find('Button').simulate('click');
		expect(wrapper.find(Modal).contains(<h4>Quincy</h4>)).to.eql(true);
		expect(wrapper.find(Modal).contains(<h5>Quincy@test.com</h5>)).to.eql(true);
		expect(wrapper.find(Modal).contains(<h5>555-555-5555</h5>)).to.eql(true);
	});
});
