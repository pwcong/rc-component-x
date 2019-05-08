import React from 'react';

import Test from '@rc-x/test';

import Button from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Button}
      componentProps={{
        children: 'Hello World!'
      }}
      componentTestProps={{
        type: {
          type: 'radio',
          label: '类型',
          value: 'default',
          options: [
            { label: 'primary', value: 'primary' },
            {
              label: 'default',
              value: 'default'
            },
            {
              label: 'warning',
              value: 'warning'
            },
            {
              label: 'success',
              value: 'success'
            },
            {
              label: 'danger',
              value: 'danger'
            }
          ]
        },
        shape: {
          type: 'radio',
          label: '形状',
          value: 'default',
          options: [
            { label: 'default', value: 'default' },
            { label: 'round', value: 'round' },
            {
              label: 'circle',
              value: 'circle'
            },
            { label: 'link', value: 'link' }
          ]
        },
        size: {
          type: 'radio',
          label: '尺寸',
          value: 'default',
          options: [
            { label: 'large', value: 'large' },
            {
              label: 'default',
              value: 'default'
            },
            {
              label: 'small',
              value: 'small'
            }
          ]
        },
        disabled: {
          type: 'switch',
          value: false,
          label: '是否禁止'
        },
        loading: {
          type: 'switch',
          value: false,
          label: '是否载入中'
        },
        icon: {
          type: 'input',
          value: '',
          label: '图标'
        },
        href: {
          type: 'input',
          value: '',
          label: '链接'
        },
        target: {
          type: 'radio',
          value: '_self',
          label: '链接窗口对象',
          options: [
            { label: '_self', value: '_self' },
            { label: '_blank', value: '_blank' }
          ]
        },
        htmlType: {
          type: 'radio',
          value: 'button',
          label: 'HTML类型',
          options: [
            { label: 'button', value: 'button' },
            { label: 'submit', value: 'submit' },
            { label: 'reset', value: 'reset' }
          ]
        },
        block: {
          type: 'switch',
          value: false,
          label: '是否为Block'
        },
        checked: {
          type: 'switch',
          value: false,
          label: '是否为选中状态'
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
