import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';
import Foo from './Foo';

describe('<App />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Foo)).to.have.length(0);
  })
});
