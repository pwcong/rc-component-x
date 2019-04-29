import React from 'react';
import Test from '@rc-x/test';

import Checkbox from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Checkbox}
      componentProps={{}}
      componentTestProps={{}}
      componentPackageJson={packageJson}
    />
  );
}
