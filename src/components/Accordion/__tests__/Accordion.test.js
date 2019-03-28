import React from 'react';
import Accordion from '../Accordion';
import { mount } from 'enzyme';

describe('Accordion', () => {
  describe('When Accordion is open by default', () => {
    let component;
    const children = <div id="dummy-children" />;

    beforeEach(() => {
      const props = {
        label: 'dummyText',
        isOpenByDefault: true
      };

      component = mount(<Accordion {...props}>{children}</Accordion>);
    });

    afterEach(() => {
      component.unmount();
    });

    it('should show Label text', () => {
      expect(component.find('Label').text()).toEqual('dummyText');
    });

    it('should render a Accordion with children component', () => {
      expect(component.find('#dummy-children').exists()).toEqual(true);
    });

    it('should render a Accordion with chevronIcon down', () => {
      expect(component.find('ChevronDown').exists()).toEqual(true);
    });

    it('should not show a separator', () => {
      expect(component.find('HR').exists()).toEqual(false);
    });

    describe('When accordion is clicked', () => {
      beforeEach(() => {
        component.find('AccordionHeader').simulate('click');
      });

      it('should remove children component', () => {
        expect(component.find('#dummy-children').exists()).toEqual(false);
      });

      it('should render a Accordion with chevronIcon up', () => {
        expect(component.find('ChevronUp').exists()).toEqual(true);
      });
    });
  });

  describe('When Accordion is closed by default', () => {
    let component;
    const children = <div id="dummy-children" />;

    beforeEach(() => {
      const props = {
        label: 'dummyText',
        isOpenByDefault: false
      };

      component = mount(<Accordion {...props}>{children}</Accordion>);
    });

    afterEach(() => {
      component.unmount();
    });

    it('should show Label text', () => {
      expect(component.find('Label').text()).toEqual('dummyText');
    });

    it('should render a Accordion with children component', () => {
      expect(component.find('#dummy-children').exists()).toEqual(false);
    });

    it('should render a Accordion with chevronIcon Up', () => {
      expect(component.find('ChevronUp').exists()).toEqual(true);
    });

    it('should show a separator', () => {
      expect(component.find('HR').exists()).toEqual(true);
    });

    describe('When accordion is clicked', () => {
      beforeEach(() => {
        component.find('AccordionHeader').simulate('click');
      });

      it('should should children component', () => {
        expect(component.find('#dummy-children').exists()).toEqual(true);
      });

      it('should render a Accordion with chevronIcon down', () => {
        expect(component.find('ChevronDown').exists()).toEqual(true);
      });
    });
  });
});
