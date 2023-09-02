import { createContext, useContext } from 'react';

const RouteContext = createContext();

export const RouteProvider = ({ children, routes }) => {
  return (
    <RouteContext.Provider value={routes}>{children}</RouteContext.Provider>
  );
};

export const useRouteContext = () => {
  return useContext(RouteContext);
};
