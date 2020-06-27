import React from 'react';
import { Redirect } from 'react-router-dom';
import todosRoutes from './views/todos/TodosRoutes';

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

const routes = [...todosRoutes, ...redirectRoute];

export default routes;
