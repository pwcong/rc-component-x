import React from 'react';
import Test from '@rc-x/test';

import InputNumber from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={InputNumber}
      componentProps={{}}
      componentTestProps={{
        defaultValue: {
          type: 'inputNumber',
          value: 0,
          label: '默认值'
        },
        disabled: {
          type: 'switch',
          value: false,
          label: '是否禁用'
        },
        size: {
          type: 'radio',
          value: 'default',
          label: '大小',
          options: [
            {
              label: 'default',
              value: 'default'
            },
            {
              label: 'large',
              value: 'large'
            },
            {
              label: 'small',
              value: 'small'
            }
          ]
        },
        prefix: {
          type: 'input',
          label: '前缀图标',
          value: 'user'
        },
        suffix: {
          type: 'input',
          label: '后缀图标',
          value: 'info'
        },
        allowClear: {
          type: 'switch',
          value: true,
          label: '允许清除'
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
