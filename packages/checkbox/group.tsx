import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import Checkbox, { ICheckboxProps } from './checkbox';

import './style.scss';

const baseCls = getPrefixCls('checkbox-group');

export type ICheckboxGroupOption = {
  label: React.ReactNode;
  value: any;
  disabled?: boolean;
};

export type ICheckboxGroupOptions = Array<ICheckboxGroupOption>;

export interface ICheckboxGroupProps {
  /** 自定义类名 */
  className?: string;
  /** 默认选中值 */
  defaultValue?: Array<any>;
  /** 当前选中值 */
  value?: Array<any>;
  /** 统一字段名称 */
  name?: string;
  /** 可选项 */
  options?: ICheckboxGroupOptions;
  /** 变更回调 */
  onChange?: (value: Array<any>) => void;
  /** 子内容 */
  children?:
    | React.ReactElement<ICheckboxProps>
    | Array<React.ReactElement<ICheckboxProps>>;
  /** 是否禁用 */
  disabled?: boolean;
}

interface IState {
  value: Array<any>;
}

export default class CheckboxGroup extends React.PureComponent<
  ICheckboxGroupProps,
  IState
> {
  constructor(props: ICheckboxGroupProps) {
    super(props);

    const { defaultValue } = props;

    this.state = {
      value: defaultValue || []
    };
  }

  handleChange = (value, checked: boolean) => {
    const { value: customValue, onChange } = this.props;

    const newValue = (customValue !== undefined
      ? customValue
      : this.state.value
    )
      .map(v => v)
      .filter(v => v !== value)
      .concat(checked ? [value] : []);

    this.setState(
      {
        value: newValue
      },
      () => {
        onChange && onChange(newValue);
      }
    );
  };

  renderOptions = () => {
    const { options, children, name, value, disabled } = this.props;

    if (options !== undefined) {
      return options.map((option, index) => {
        const optionProps = {
          checked:
            value !== undefined
              ? value.indexOf(option.value) > -1
              : this.state.value.indexOf(option.value) > -1,
          key: `${baseCls}-item-${index}`,
          name: name,
          value: option.value,
          onCheck: checked => {
            this.handleChange(option.value, checked);
          },
          disabled: disabled !== undefined ? disabled : option.disabled
        };

        return <Checkbox {...optionProps}>{option.label}</Checkbox>;
      });
    }

    return React.Children.map(
      children,
      (child: React.ReactElement<ICheckboxProps>, index) => {
        const props = Object.assign({}, child.props, {
          key: `${baseCls}-item-${index}`,
          name,
          checked:
            value !== undefined
              ? value.indexOf(child.props.value) > -1
              : this.state.value.indexOf(child.props.value) > -1,
          disabled: disabled !== undefined ? disabled : child.props.disabled,
          onCheck: checked => {
            this.handleChange(child.props.value, checked);
          }
        });

        return <Checkbox {...props} />;
      }
    );
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames(baseCls, className)}>
        {this.renderOptions()}
      </div>
    );
  }
}
