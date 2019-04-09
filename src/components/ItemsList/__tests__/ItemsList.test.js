import React from 'react';
import { create } from 'react-test-renderer';

import ItemsList from '../ItemsList';

jest.mock('../../Item', () => 'Item');
jest.mock('../../Text', () => 'Text');

describe('COMPONENT - ItemsList', () => {
  it('renders nothing if there were no items provided', () => {
    const component = create(<ItemsList />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders info message if there are 0 items in cart', () => {
    const component = create(<ItemsList items={[]} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correct number of items', () => {
    const items = [{ id: 'test-id-1' }, { id: 'test-id-2' }];
    const component = create(<ItemsList items={items} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
