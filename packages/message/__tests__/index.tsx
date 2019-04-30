import React from 'react';
import Test from '@rc-x/test';

import Message from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Message}
      componentProps={{}}
      componentTestProps={{}}
      componentPackageJson={packageJson}
    />
  );
}
