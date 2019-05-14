import React from 'react';
import Test from '@rc-x/test';

import Avatar from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Avatar}
      componentProps={{}}
      componentTestProps={{
        icon: {
          type: 'input',
          value: 'user',
          label: '图标'
        },
        src: {
          type: 'input',
          value: 'https://avatars2.githubusercontent.com/u/13917544?s=460&v=4',
          label: '头像地址'
        },
        alt: {
          type: 'input',
          value: '头像',
          label: '提示信息'
        },
        size: {
          type: 'radio',
          value: 'default',
          label: '尺寸',
          options: [
            { label: 'default', value: 'default' },
            { label: 'large', value: 'large' },
            { label: 'small', value: 'small' }
          ]
        },
        shape: {
          type: 'radio',
          value: 'default',
          label: '形状',
          options: [
            { label: 'default', value: 'default' },
            { label: 'square', value: 'square' },
            { label: 'circle', value: 'circle' }
          ]
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
