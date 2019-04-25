import React from 'react';

import Test from '@rc-x/test';

import Input from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Input}
      componentProps={{}}
      componentTestProps={{}}
      componentPackageJson={packageJson}
    >
      <Input />
    </Test>
  );
}
