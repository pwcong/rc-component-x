import React from 'react';
import Test from '@rc-x/test';

import Spin from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Spin}
      componentProps={{
        children: (
          <div
            style={{
              textAlign: 'center',
              height: 200,
              lineHeight: '200px',
              border: '1px solid #cccccc'
            }}
          >
            Hello World!
          </div>
        )
      }}
      componentTestProps={{
        size: {
          type: 'radio',
          value: 'default',
          label: '尺寸',
          options: [
            { label: 'default', value: 'default' },
            { label: 'small', value: 'small' },
            { label: 'large', value: 'large' }
          ]
        },
        type: {
          type: 'radio',
          value: undefined,
          label: '图标类型',
          options: [
            { label: 'undefined', value: undefined },
            { label: 'loader', value: 'loader' }
          ]
        },
        spinning: {
          type: 'switch',
          value: true,
          label: '加载中'
        },
        tip: {
          type: 'input',
          value: 'Hello World!',
          label: '提示信息'
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
