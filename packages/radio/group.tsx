import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';
import { IButtonSize, IButtonShape } from '@rc-x/button';

import Radio from './radio';
import Button from './button';

import { IBaseProps } from './types';

import './style.scss';
import { RadioButton } from '.';

const baseCls = getPrefixCls('radio-group');

export type IRadioGroupOption = {
  label: React.ReactNode;
  value: any;
  disabled?: boolean;
};

export type IRadioGroupOptions = Array<IRadioGroupOption>;

export interface IRadioGroupProps {
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 默认选中值 */
  defaultValue?: any;
  /** 当前选中值 */
  value?: any;
  /** 统一字段名称 */
  name?: string;
  /** 可选项 */
  options?: IRadioGroupOptions;
  /** 选项类型 */
  optionType?: 'radio' | 'button';
  /** 变更回调 */
  onChange?: (value: any) => void;
  /** 子内容 */
  children?:
    | React.ReactElement<IBaseProps>
    | Array<React.ReactElement<IBaseProps>>;
  /** 是否禁用 */
  disabled?: boolean;
  /** 按钮尺寸 */
  buttonSize?: IButtonSize;
  /** 按钮形状 */
  buttonShape?: IButtonShape;
}

interface IState {
  value: any;
}

export default class RadioGroup extends React.PureComponent<
  IRadioGroupProps,
  IState
> {
  static defaultProps: IRadioGroupProps = {
    optionType: 'radio'
  };

  constructor(props: IRadioGroupProps) {
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
    const {
      options,
      optionType,
      children,
      name,
      value,
      disabled,
      buttonSize,
      buttonShape
    } = this.props;

    if (options !== undefined) {
      const Option = optionType === 'button' ? Button : Radio;

      return options.map((option, index) => {
        const optionProps = {
          checked:
            value !== undefined
              ? value === option.value
              : this.state.value === option.value,
          key: `${baseCls}-item-${index}`,
          name: name,
          value: option.value,
          onCheck: checked => {
            checked && this.handleChange(option.value);
          },
          disabled: disabled !== undefined ? disabled : option.disabled
        };

        if (optionType === 'button') {
          optionProps['size'] = buttonSize;
          optionProps['shape'] = buttonShape;
        }

        return <Option {...optionProps}>{option.label}</Option>;
      });
    }

    return React.Children.map(
      children,
      (child: React.ReactElement<IBaseProps>, index) => {
        const Option = child.type === RadioButton ? RadioButton : Radio;

        const props = Object.assign(
          {
            size: buttonSize,
            shape: buttonShape
          },
          child.props,
          {
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
          }
        );

        return <Option {...props} />;
      }
    );
  };

  render() {
    const { className, style } = this.props;

    return (
      <div className={classNames(baseCls, className)} style={style}>
        {this.renderOptions()}
      </div>
    );
  }
}
