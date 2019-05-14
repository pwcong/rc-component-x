import React from 'react';
import Test from '@rc-x/test';

import message from '../index';
import Message from '../message';

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
    >
      <button
        style={{ marginRight: '8px' }}
        onClick={() => {
          message.info({
            content: 'Hello World!',
            onClose: () => {
              console.log('info');
            }
          });
        }}
      >
        info
      </button>
      <button
        style={{ marginRight: '8px' }}
        onClick={() => {
          message.loading({
            content: 'Hello World!',
            onClose: () => {
              console.log('loading');
            }
          });
        }}
      >
        loading
      </button>
      <button
        style={{ marginRight: '8px' }}
        onClick={() => {
          message.success({
            content: 'Hello World!',
            onClose: () => {
              console.log('success');
            }
          });
        }}
      >
        success
      </button>
      <button
        style={{ marginRight: '8px' }}
        onClick={() => {
          message.warning({
            content: 'Hello World!',
            onClose: () => {
              console.log('warning');
            }
          });
        }}
      >
        warning
      </button>
      <button
        style={{ marginRight: '8px' }}
        onClick={() => {
          message.error({
            content: 'Hello World!',
            onClose: () => {
              console.log('error');
            }
          });
        }}
      >
        error
      </button>
    </Test>
  );
}
