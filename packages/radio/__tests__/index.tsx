import React from 'react';
import Test from '@rc-x/test';

import Radio from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Radio}
      componentProps={{}}
      componentTestProps={{}}
      componentPackageJson={packageJson}
    />
  );
}
