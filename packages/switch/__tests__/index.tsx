import React from 'react';
import Test from '@rc-x/test';

import Switch from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Switch}
      componentProps={{}}
      componentTestProps={{}}
      componentPackageJson={packageJson}
    />
  );
}
