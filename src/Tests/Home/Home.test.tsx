import React from 'react';

import Home from '../../Components/Home/Home';
import { shallow } from 'enzyme';

test('title Check', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('h1').text()).toBe("Welcome to bookmarks management");
});

test('sub title check', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('h3').text()).toBe("Effective way to manage all URL's");
});

