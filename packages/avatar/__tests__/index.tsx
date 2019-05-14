import React from 'react';
import Test from '@rc-x/test';

import Avatar from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Avatar}
      componentProps={{}}
      componentTestProps={{}}
      componentPackageJson={packageJson}
    />
  );
}
