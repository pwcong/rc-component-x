import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';
import { IButtonSize, IButtonShape } from '@rc-x/button';

import Radio, { IProps as IRadioProps } from './radio';
import Button, { IProps as IButtonProps } from './button';

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
  optionType?: 'radio' | 'button';
  /** 变更回调 */
  onChange?: (value: any) => void;
  /** 子内容 */
  children?:
    | React.ReactElement<IRadioProps>
    | Array<React.ReactElement<IRadioProps>>
    | React.ReactElement<IButtonProps>
    | Array<React.ReactElement<IButtonProps>>;
  /** 是否禁用 */
  disabled?: boolean;
  /** 按钮尺寸 */
  buttonSize?: IButtonSize;
  buttonShape?: IButtonShape;
}

export interface IState {
  value: any;
}

export default class RadioGroup extends React.PureComponent<IProps, IState> {
  static defaultProps: IProps = {
    optionType: 'radio'
  };

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
