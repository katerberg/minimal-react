import * as chai from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Label } from 'reactstrap';
import sinon = require('sinon');
import { SinonStub } from 'sinon';
import sinonChai = require('sinon-chai');
import { IEmployee, MainComponent } from './MainComponent';
import { PeopleList } from './PeopleList';
import { SearchComponent } from './SearchComponent';
chai.use(sinonChai);
const { expect } = chai;

describe('<MainComponent>', () => {
	it('renders <PeopleList> and <SearchComponent>', () => {
		const wrapper: ShallowWrapper = shallow(<MainComponent />);
		expect(wrapper.find(PeopleList)).to.have.length(1);
		expect(wrapper.find(SearchComponent)).to.have.length(1);
	});

	describe('searchByLetter()', () => {
		let testObject: MainComponent;
		let stub: SinonStub;

		beforeEach(() => {
			testObject = new MainComponent({});
			stub = sinon.stub(testObject, 'setState');
		});

		afterEach(() => {
			stub.restore();
		});

		it('does not filter list if nothing is passed in', () => {
			const input: any = { target: { value: '' } };

			testObject.searchByLetter(input);

			expect(stub.callCount).to.eql(1);
			expect(stub).to.have.been.calledWith({ letters: testObject.letters });
		});

		it('only includes the starting letter if provided', () => {
			const input: any = { target: { value: 'A' } };

			testObject.searchByLetter(input);

			expect(stub.callCount).to.eql(1);
			expect(stub).to.have.been.calledWith({ letters: ['A'] });
		});

		it('capitalizes input letter', () => {
			const input: any = { target: { value: 'd' } };

			testObject.searchByLetter(input);

			expect(stub.callCount).to.eql(1);
			expect(stub).to.have.been.calledWith({ letters: ['D'] });
		});
	});
});
