import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation } from 'react-router-dom';

const RouteMiddleware = ({ path, component: Component, title, ...rest }) => {
  const location = useLocation();

  useEffect(() => {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_path: location.pathname + location.search,
      page_location: window.location.href,
    });
  }, [location]);

  return (
    <Route
      {...rest}
      path={path}
      render={(props) => <Component title={title} {...props} />}
    />
  );
};

RouteMiddleware.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default RouteMiddleware;
