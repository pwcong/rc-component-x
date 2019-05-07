import React from 'react';

import Button, { IProps as IButtonProps } from '@rc-x/button';
import { classNames, getPrefixCls } from '@rc-x/utils';

import { IBaseProps } from './types';

import './style.scss';

const baseCls = getPrefixCls('radio-button');

export type IProps = IBaseProps & IButtonProps & {};
export interface IState {
  checked: boolean;
}

export default class Button extends React.PureComponent<IProps, IState> {
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
          <Button {...this.props}>{children}</Button>
        </div>
      </label>
    );
  }
}
