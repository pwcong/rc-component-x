import React from 'react';

import Test from '@rc-x/test';

import Input from '../index';
import packageJson from '../package.json';

const { Password, Search, Textarea } = Input;

export default class extends React.PureComponent {
  private inputRef: React.RefObject<any> = React.createRef();
  private searchRef: React.RefObject<any> = React.createRef();
  private passwordRef: React.RefObject<any> = React.createRef();
  private textareaRef: React.RefObject<any> = React.createRef();

  componentDidMount() {
    if (this.inputRef.current) {
      console.log(this.inputRef.current.value);
    }
  }

  render() {
    return (
      <Test
        component={[Input, Password, Search, Textarea]}
        componentName={['Input', 'Password', 'Search', 'Textarea']}
        componentProps={[
          {
            ref: this.inputRef
          },
          {
            ref: this.passwordRef
          },
          {
            ref: this.searchRef,
            onSearch: value => {
              alert('Search: ' + value);
            }
          },
          {
            ref: this.textareaRef,
            row: {
              max: 12,
              min: 1
            }
          }
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
          {
            defaultValue: {
              type: 'input',
              value: 'Hello World!',
              label: '默认值'
            }
          },
          {
            defaultValue: {
              type: 'input',
              value: 'Hello World!',
              label: '默认值'
            },
            counter: {
              type: 'switch',
              value: true,
              label: '计数器'
            },
            limit: {
              type: 'inputNumber',
              value: 100,
              label: '长度限制'
            },
            allowClear: {
              type: 'switch',
              value: true,
              label: '允许清除'
            }
          }
        ]}
        componentPackageJson={packageJson}
      >
        <Input
          defaultValue="Yeah!"
          addonBefore={<div>Before</div>}
          addonAfter={<div>After</div>}
          size="large"
        />
      </Test>
    );
  }
}
