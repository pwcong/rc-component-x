import React from 'react';
import Test from '@rc-x/test';

import Badge from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Badge}
      componentProps={{
        children: (
          <div
            style={{
              display: 'inline-block',
              border: '1px solid #cccccc',
              padding: '48px'
            }}
          />
        )
      }}
      componentTestProps={{
        color: {
          type: 'input',
          label: '颜色',
          value: ''
        },
        title: {
          type: 'input',
          label: '标题',
          value: '999+'
        },
        dot: {
          type: 'switch',
          label: '只显示点',
          value: false
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
        },
        shape: {
          type: 'radio',
          label: '形状',
          value: 'round',
          options: [
            { label: 'round', value: 'round' },
            { label: 'square', value: 'square' }
          ]
        },
        type: {
          type: 'radio',
          label: '类型',
          value: 'default',
          options: [
            { label: 'default', value: 'default' },
            { label: 'primary', value: 'primary' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'error', value: 'error' }
          ]
        },
        offset: {
          type: 'radio',
          label: '位置偏移',
          value: undefined,
          options: [
            { label: 'undefined', value: 'undefined' },
            { label: 'x: 8, y: 8', value: { x: 8, y: 8 } }
          ]
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
