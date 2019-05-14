import React from 'react';
import Test from '@rc-x/test';

import Badge from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Badge}
      componentProps={{}}
      componentTestProps={{}}
      componentPackageJson={packageJson}
    />
  );
}
