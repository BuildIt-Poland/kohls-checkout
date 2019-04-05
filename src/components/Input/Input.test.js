import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';

describe('Input', () => {
  let component;

  beforeEach(() => {
    const props = {
      label: 'Dummy Label',
      placeholder: 'Dummy placeHolder',
      type: 'text'
    };

    component = shallow(<Input {...props} />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render label', () => {
    expect(component.find('Input').exists()).toBe(true);
  });

  it('should render input', () => {
    expect(component.find('Label').text()).toBe('Dummy Label');
  });
});
