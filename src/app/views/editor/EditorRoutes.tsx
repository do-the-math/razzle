import React from 'react';

const editorRoutes = [
  {
    path: '/editor',
    component: React.lazy(() => import('./Editor'))
  }
];

export default editorRoutes;
