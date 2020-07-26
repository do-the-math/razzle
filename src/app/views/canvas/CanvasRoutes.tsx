import React from 'react';

const todosRoutes = [
  {
    path: '/canvas',
    component: React.lazy(() => import('./Canvas'))
  }
];

export default todosRoutes;
