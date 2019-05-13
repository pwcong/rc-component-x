import React from 'react';
import Test from '@rc-x/test';

import Messages from '../index';
import Message from '../message';

console.log(Messages);

import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Message}
      componentProps={{
        content: 'Hello World!'
      }}
      componentTestProps={{
        type: {
          type: 'radio',
          value: 'info',
          label: '类型',
          options: [
            { label: 'info', value: 'info' },
            { label: 'loading', value: 'loading' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'error', value: 'error' }
          ]
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
