import React from 'react';
import { Redirect } from 'react-router-dom';
import todoRoutes from './views/todos/TodoRoutes';

const redirectRoute = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/error/404" />
  }
];

const routes = [...todoRoutes, ...redirectRoute];

export default routes;
