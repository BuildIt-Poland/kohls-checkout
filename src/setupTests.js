import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { Route } from 'react-router-dom';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

global.getRoutesMap = wrapper =>
  wrapper.find(Route).reduce((routesMap, route) => {
    const { path, component } = route.props();
    if (typeof path !== 'string') {
      return routesMap;
    }

    return Object.assign(routesMap, { [path]: component });
  }, {});
