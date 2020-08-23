import React from 'react';
import { Redirect } from 'react-router-dom';
import canvasRoutes from './views/canvas/CanvasRoutes';
import editorRoutes from './views/editor/EditorRoutes';
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

const routes = [
  ...canvasRoutes,
  ...editorRoutes,
  ...todosRoutes,
  ...errorRoute,
  ...redirectRoute
];

export default routes;
