import React from 'react';
import Test from '@rc-x/test';
import Icon from '@rc-x/icon';

import Switch from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Switch}
      componentProps={{}}
      componentTestProps={{
        name: {
          type: 'input',
          label: '字段名',
          value: 'name'
        },
        value: {
          type: 'input',
          label: '字段值',
          value: 'switch'
        },
        loading: {
          type: 'switch',
          label: '是否加载中',
          value: false
        },
        disabled: {
          type: 'switch',
          label: '是否禁用',
          value: false
        },
        checked: {
          type: 'radio',
          label: '选中状态',
          value: undefined,
          options: [
            { label: 'undefined', value: undefined },
            { label: 'true', value: true },
            { label: 'false', value: false }
          ]
        },
        defaultChecked: {
          type: 'switch',
          label: '默认选中状态',
          value: true
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
        checkedChildren: {
          type: 'radio',
          label: '选中内容',
          value: undefined,
          options: [
            { label: 'undefined', value: undefined },
            { label: '1', value: '1' },
            { label: 'Icon', value: <Icon type="check" /> }
          ]
        },
        unCheckedChildren: {
          type: 'radio',
          label: '未选中内容',
          value: undefined,
          options: [
            { label: 'undefined', value: undefined },
            { label: '0', value: '0' },
            { label: 'Icon', value: <Icon type="x" /> }
          ]
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
