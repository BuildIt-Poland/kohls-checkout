// Restores scroll position to the top of the page after each route change

import { useEffect } from 'react';
import PropTypes from 'prop-types';

function ScrollToTop({ location, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default ScrollToTop;
