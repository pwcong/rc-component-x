import React from 'react';
import Test from '@rc-x/test';

import Rate from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Rate}
      componentProps={{}}
      componentTestProps={{
        allowClear: {
          type: 'switch',
          value: false,
          label: '允许清除'
        },
        allowHalf: {
          type: 'switch',
          value: false,
          label: '允许一半'
        },
        character: {
          type: 'radio',
          value: undefined,
          label: '自定义符号',
          options: [
            { label: 'undefined', value: undefined },
            { label: '好', value: '好' }
          ]
        },
        count: {
          type: 'inputNumber',
          value: 5,
          label: '数值范围'
        },
        value: {
          type: 'radio',
          value: undefined,
          label: '自定义值',
          options: [
            { label: 'undefined', value: undefined },
            { label: '4', value: 4 }
          ]
        },
        defaultValue: {
          type: 'inputNumber',
          value: 2.5,
          label: '默认数值'
        },
        disabled: {
          type: 'switch',
          value: false,
          label: '禁用'
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
