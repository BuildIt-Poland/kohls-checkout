import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

global.getRoutesMap = wrapper =>
  wrapper.find(Route).reduce((routesMap, route) => {
    const { path, component } = route.props();
    if (typeof path !== 'string') {
      return routesMap;
    }

    return Object.assign(routesMap, { [path]: component });
  }, {});
