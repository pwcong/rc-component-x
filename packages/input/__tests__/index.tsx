import React from 'react';

import Test from '@rc-x/test';

import Input from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={[Input, Input.Password, Input.Search, Input.Textarea]}
      componentName={['Input', 'Password', 'Search', 'Textarea']}
      defaultActiveComponentName="Textarea"
      componentProps={[
        {},
        {},
        {
          onSearch: value => {
            alert('Search: ' + value);
          }
        },
        {}
      ]}
      componentTestProps={[
        {
          defaultValue: {
            type: 'input',
            value: 'Hello World!',
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
          htmlType: {
            type: 'radio',
            value: 'text',
            label: 'HTML类型',
            options: [
              {
                label: 'text',
                value: 'text'
              },
              {
                label: 'number',
                value: 'number'
              },
              {
                label: 'password',
                value: 'password'
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
        },
        {
          defaultValue: {
            type: 'input',
            value: 'Hello World!',
            label: '默认值'
          },
          defaultVisibled: {
            type: 'switch',
            value: true,
            label: '是否默认可见'
          }
        },
        {},
        {}
      ]}
      componentPackageJson={packageJson}
    >
      <Input
        addonBefore={<div>Before</div>}
        addonAfter={<div>After</div>}
        size="large"
      />
    </Test>
  );
}
