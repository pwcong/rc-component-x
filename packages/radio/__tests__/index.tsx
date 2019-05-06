import React from 'react';
import Test from '@rc-x/test';

import Radio, { RadioGroup } from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={[Radio, RadioGroup]}
      componentProps={[
        {
          children: 'Hello World!'
        },
        {
          options: [
            { label: 'AAA', value: 'a', disabled: true },
            { label: 'BBB', value: 'b' },
            { label: 'CCC', value: 'c' }
          ],
          onChange(value) {
            console.log(value);
          }
        }
      ]}
      componentTestProps={[
        {
          disabled: {
            type: 'switch',
            value: false,
            label: '是否禁用'
          },
          defaultChecked: {
            type: 'switch',
            value: false,
            label: '默认选中状态'
          },
          checked: {
            type: 'radio',
            label: '选中状态',
            value: undefined,
            options: [
              { value: undefined, label: 'undefined' },
              { value: true, label: 'true' },
              { value: false, label: 'false' }
            ]
          },
          name: {
            type: 'input',
            value: 'name',
            label: '字段名称'
          },
          value: {
            type: 'input',
            value: 'value',
            label: '选中值'
          }
        },
        {
          disabled: {
            type: 'radio',
            value: undefined,
            label: '是否禁用',
            options: [
              { value: undefined, label: 'undefined' },
              { value: true, label: 'true' },
              { value: false, label: 'false' }
            ]
          },
          value: {
            type: 'radio',
            label: '当前选中值',
            value: undefined,
            options: [
              { value: undefined, label: 'undefined' },
              { value: 'a', label: 'AAA' },
              { value: 'b', label: 'BBB' },
              { value: 'c', label: 'CCC' }
            ]
          }
        }
      ]}
      componentName={['Radio', 'RadioGroup']}
      componentPackageJson={packageJson}
    />
  );
}
