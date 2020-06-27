import React from 'react';

const todosRoutes = [
  {
    path: '/todos',
    component: React.lazy(() => import('./Todos'))
  }
];

export default todosRoutes;
