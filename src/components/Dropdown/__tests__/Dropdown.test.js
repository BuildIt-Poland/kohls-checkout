import DropDown from './DropDown';
import React from 'react';
import { shallow } from 'enzyme';

describe('DropDown', () => {
  describe('When DropDown is enabled', () => {
    let component;
    let onChangeMock = jest.fn();

    beforeEach(() => {
      const props = {
        label: 'Select Date',
        disabled: false,
        onChange: onChangeMock,
        error: 'Error Message',

        options: [
          {
            label: 'MM',
            value: null
          },
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          }
        ]
      };

      component = shallow(<DropDown {...props} />);
    });

    afterEach(() => {
      component.unmount();
    });

    it('Should see the error message', () => {
      expect(component.find('ErrorLabel').exists()).toBe(true);
    });

    it('Should set disabled to false', () => {
      expect(component.find('Select').props().disabled).toBe(false);
    });

    it('Should load 3 options', () => {
      expect(component.find('option').length).toBe(3);
    });

    it('Should render label', () => {
      expect(component.find('Label').exists()).toBe(true);
      expect(component.find('Label').text()).toBe('Select Date');
    });

    describe('When select an option ', () => {
      beforeEach(() => {
        component.find('Select').simulate('change');
      });

      afterEach(() => {
        onChangeMock.mockReset();
      });

      it('should trigger onChange', () => {
        expect(onChangeMock).toHaveBeenCalled();
      });
    });
  });

  describe('When DropDown is disabled and there is no errors', () => {
    let component;
    let onChangeMock = jest.fn();

    beforeEach(() => {
      const props = {
        label: 'Select Date',
        disabled: true,
        onChange: onChangeMock,
        options: [
          {
            label: 'MM',
            value: null
          },
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          }
        ]
      };

      component = shallow(<DropDown {...props} />);
    });

    afterEach(() => {
      component.unmount();
    });

    it('Should not the error message', () => {
      expect(component.find('ErrorLabel').exists()).toBe(false);
    });

    it('Should set disabled to true', () => {
      expect(component.find('Select').props().disabled).toBe(true);
    });

    it('Should render label', () => {
      expect(component.find('Label').exists()).toBe(true);
      expect(component.find('Label').text()).toBe('Select Date');
    });
  });
});
