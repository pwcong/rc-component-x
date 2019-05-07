import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';
import { IButtonSize } from '@rc-x/button';

import Radio, { IProps as IRadioProps } from './radio';

import './style.scss';

const baseCls = getPrefixCls('radio-group');

export type IOptions = {
  label: React.ReactNode;
  value: any;
  disabled?: boolean;
};

export interface IProps {
  /** 自定义类名 */
  className?: string;
  /** 默认选中值 */
  defaultValue?: any;
  /** 当前选中值 */
  value?: any;
  /** 统一字段名称 */
  name?: string;
  /** 可选项 */
  options?: Array<IOptions>;
  /** 变更回调 */
  onChange?: (value: any) => void;
  /** 子内容 */
  children?: Array<React.ReactElement<IRadioProps>>;
  /** 是否禁用 */
  disabled?: boolean;
  /** 按钮尺寸 */
  buttonSize?: IButtonSize;
}

export interface IState {
  value: any;
}

export default class Group extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const { defaultValue } = props;

    this.state = {
      value: defaultValue
    };
  }

  handleChange = value => {
    const { onChange } = this.props;

    this.setState(
      {
        value
      },
      () => {
        onChange && onChange(value);
      }
    );
  };

  renderOptions = () => {
    const { options, children, name, value, disabled } = this.props;

    if (options !== undefined) {
      return options.map((option, index) => (
        <Radio
          checked={
            value !== undefined
              ? value === option.value
              : this.state.value === option.value
          }
          key={`${baseCls}-item-${index}`}
          name={name}
          value={option.value}
          onCheck={checked => {
            checked && this.handleChange(option.value);
          }}
          disabled={disabled !== undefined ? disabled : option.disabled}
        >
          {option.label}
        </Radio>
      ));
    }

    return React.Children.map(
      children,
      (child: React.ReactElement<IRadioProps>, index) => {
        const props = Object.assign({}, child.props, {
          key: `${baseCls}-item-${index}`,
          name,
          checked:
            value !== undefined
              ? value === child.props.value
              : this.state.value === child.props.value,
          disabled: disabled !== undefined ? disabled : child.props.disabled,
          onCheck: checked => {
            checked && this.handleChange(child.props.value);
          }
        });

        return <Radio {...props} />;
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
