import React from 'react';
import Test from '@rc-x/test';

import Popover from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Popover}
      componentProps={{}}
      componentTestProps={{}}
      componentPackageJson={packageJson}
    />
  );
}
