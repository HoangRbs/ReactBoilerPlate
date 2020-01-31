import {LoginPage} from '../../components/LoginPage';
import {shallow} from 'enzyme';
import React from 'react';

test("should render LoginPage correctly",() => {
  const wrapper = shallow(<LoginPage/>);
  expect(wrapper).toMatchSnapshot();
})