import React from 'react';
import Test from '@rc-x/test';

import Tag from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Tag}
      componentProps={{
        children: 'Hello World!'
      }}
      componentTestProps={{
        closable: {
          type: 'switch',
          value: false,
          label: '允许关闭'
        },
        visible: {
          type: 'radio',
          value: undefined,
          label: '是否显示',
          options: [
            { label: 'undefined', value: undefined },
            { label: 'true', value: true },
            { label: 'false', value: false }
          ]
        },
        type: {
          type: 'radio',
          value: 'default',
          label: '类型',
          options: [
            { label: 'default', value: 'default' },
            { label: 'primary', value: 'primary' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'error', value: 'error' }
          ]
        },
        shape: {
          type: 'radio',
          value: 'default',
          label: '形状',
          options: [
            { label: 'default', value: 'default' },
            { label: 'square', value: 'square' },
            { label: 'round', value: 'round' }
          ]
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
