import React from 'react';

import Test from '@rc-x/test';

import Icon from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Icon}
      componentProps={{}}
      componentTestProps={{
        type: {
          type: 'input',
          label: '类型',
          value: 'loader'
        },
        spin: {
          type: 'switch',
          label: '是否旋转',
          value: false
        },
        rotate: {
          type: 'inputNumber',
          label: '旋转角度',
          value: 0
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
