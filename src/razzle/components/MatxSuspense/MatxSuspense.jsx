import React, { Suspense } from 'react';

import { MatxLoading } from 'razzle';

const MatxSuspense = (props) => {
  return <Suspense fallback={<MatxLoading />}>{props.children}</Suspense>;
};

export default MatxSuspense;
