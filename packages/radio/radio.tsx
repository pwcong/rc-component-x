import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('radio');

export interface IProps {
  /** 类名 */
  className?: string;
  /** 选中状态 */
  checked?: boolean;
  /** 默认选中状态 */
  defaultChecked?: boolean;
  /** 字段名 */
  name?: string;
  /** 选中值 */
  value?: any;
  /** 选中回调 */
  onCheck?: (checked: boolean) => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

export interface IState {
  checked: boolean;
}

export default class Radio extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const { defaultChecked = false } = props;

    this.state = {
      checked: defaultChecked
    };
  }

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    const { checked } = nextProps;

    if (checked !== undefined) {
      return Object.assign({}, prevState, {
        checked
      });
    }

    return prevState;
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onCheck, disabled } = this.props;

    if (disabled) {
      return;
    }

    const checked = event.target.checked;
    this.setState(
      {
        checked
      },
      () => {
        onCheck && onCheck(checked);
      }
    );
  };

  render() {
    const { className, value, children, checked, disabled, style } = this.props;

    return (
      <label
        className={classNames(getPrefixCls('wrapper', baseCls), className)}
        style={style}
      >
        <div className={getPrefixCls('inner', baseCls)}>
          <span
            className={classNames(baseCls, {
              [`${getPrefixCls('disabled', baseCls)}`]: disabled,
              [`${getPrefixCls('active', baseCls)}`]:
                checked !== undefined ? checked : this.state.checked
            })}
          >
            <input
              type="radio"
              name={name}
              disabled={disabled}
              checked={checked !== undefined ? checked : this.state.checked}
              value={value}
              onChange={this.handleChange}
            />
          </span>
          <span className={getPrefixCls('children', baseCls)}>{children}</span>
        </div>
      </label>
    );
  }
}
