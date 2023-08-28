import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRouteContext } from './routecontext'

const Breadcrumbs = () => {
  const location = useLocation();
  const routes = useRouteContext();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div>
      {pathnames.map((name, index) => {
        const route = routes.find((route) => route.path === `/${name}`);
        if (!route) {
          return null;
        }
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}>{route.name}</span>
        ) : (
          <Link key={name} to={route.path}>
            {route.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
