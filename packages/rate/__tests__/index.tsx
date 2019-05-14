import React from 'react';
import Test from '@rc-x/test';

import Rate from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Rate}
      componentProps={{}}
      componentTestProps={{}}
      componentPackageJson={packageJson}
    />
  );
}
