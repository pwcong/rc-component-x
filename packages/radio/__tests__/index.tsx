import React from 'react';
import Test from '@rc-x/test';

import Radio from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={[Radio]}
      componentProps={[
        {
          children: 'Hello World!'
        }
      ]}
      componentTestProps={[
        {
          defaultChecked: {
            type: 'switch',
            value: false,
            label: '默认选中状态'
          },
          checked: {
            type: 'radio',
            label: '选中状态',
            value: undefined,
            options: [
              { value: undefined, label: '未设置' },
              { value: true, label: '选中' },
              { value: false, label: '未选中' }
            ]
          }
        }
      ]}
      componentName={['Radio']}
      componentPackageJson={packageJson}
    />
  );
}
