import React from 'react';

const todoRoutes = [
  {
    path: '/todos',
    component: React.lazy(() => import('./Todo'))
  }
];

export default todoRoutes;
