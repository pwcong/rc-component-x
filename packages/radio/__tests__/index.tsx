import React from 'react';
import Test from '@rc-x/test';

import Radio, { RadioGroup, RadioButton } from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={[Radio, RadioButton, RadioGroup]}
      componentProps={[
        {
          children: 'Hello World!'
        },
        { children: 'Hello World!' },
        {
          options: [
            { label: 'AAA', value: 'a' },
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
            value: 'radio',
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
            type: 'switch',
            value: false,
            label: '是否禁用'
          },
          size: {
            type: 'radio',
            label: '按钮尺寸',
            value: 'default',
            options: [
              { value: 'default', label: 'default' },
              { value: 'large', label: 'large' },
              { value: 'small', label: 'small' }
            ]
          },
          shape: {
            type: 'radio',
            label: '按钮形状',
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
          optionType: {
            type: 'radio',
            label: '选项类型',
            value: 'button',
            options: [
              { value: 'radio', label: 'radio' },
              { value: 'button', label: 'button' }
            ]
          },
          name: {
            type: 'input',
            value: 'radio-group',
            label: '字段名称'
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
          },
          buttonSize: {
            type: 'radio',
            label: '按钮尺寸',
            value: 'default',
            options: [
              { value: 'default', label: 'default' },
              { value: 'large', label: 'large' },
              { value: 'small', label: 'small' }
            ]
          },
          buttonShape: {
            type: 'radio',
            label: '按钮形状',
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
          }
        }
      ]}
      componentName={['Radio', 'RadioButton', 'RadioGroup']}
      componentPackageJson={packageJson}
    />
  );
}
