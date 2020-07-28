import React from 'react';

const canvasRoutes = [
  {
    path: '/canvas',
    component: React.lazy(() => import('./Canvas'))
  }
];

export default canvasRoutes;
