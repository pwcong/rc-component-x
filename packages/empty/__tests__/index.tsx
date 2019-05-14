import React from 'react';
import Test from '@rc-x/test';

import Empty from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Empty}
      componentProps={{}}
      componentTestProps={{
        description: {
          type: 'input',
          value: 'Hello World!',
          label: '描述信息'
        },
        size: {
          type: 'radio',
          value: 'default',
          label: '图片尺寸',
          options: [
            { label: 'default', value: 'default' },
            { label: 'large', value: 'large' },
            { label: 'small', value: 'small' }
          ]
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
