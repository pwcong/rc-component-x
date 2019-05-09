import React from 'react';
import Test from '@rc-x/test';

import Switch from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Switch}
      componentProps={{}}
      componentTestProps={{
        loading: {
          type: 'switch',
          label: '是否加载中',
          value: true
        },
        disabled: {
          type: 'switch',
          label: '是否禁用',
          value: false
        },
        defaultChecked: {
          type: 'switch',
          label: '默认选中状态',
          value: true
        },
        size: {
          type: 'radio',
          label: '尺寸',
          value: 'default',
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
