import React from 'react';
import Test from '@rc-x/test';

import InputNumber from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={InputNumber}
      componentProps={{}}
      componentTestProps={{}}
      componentPackageJson={packageJson}
    />
  );
}
