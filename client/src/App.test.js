import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';
import Filter from './components/Filter.js';
import SearchList from './components/SearchList.js';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render Filter', () => {
    expect(wrapper.find(Filter).exists()).toBe(true);
  });

  it('should render SearchList', () => {
    expect(wrapper.find(SearchList).exists()).toBe(true);
  });
});
