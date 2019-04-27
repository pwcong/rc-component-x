import React from 'react';
import Test from '@rc-x/test';

import Folder from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Folder}
      componentProps={{
        children: (
          <div>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
            <p>Hello World!</p>
          </div>
        ),
        style: {
          border: '1px solid #cccccc'
        }
      }}
      componentTestProps={{
        useMotion: {
          type: 'switch',
          label: '是否使用动画',
          value: false
        },
        expand: {
          type: 'switch',
          label: '是否展开',
          value: true
        },
        minHeight: {
          type: 'inputNumber',
          label: '最小高度',
          value: 0
        },
        maxHeight: {
          type: 'inputNumber',
          label: '最大高度',
          value: 50
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
