import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';
import { IBaseProps } from './types';

import './style.scss';

const baseCls = getPrefixCls('checkbox');

export interface ICheckboxProps extends IBaseProps {}

interface IState {
  checked: boolean;
}

export default class Checkbox extends React.PureComponent<
  ICheckboxProps,
  IState
> {
  constructor(props: ICheckboxProps) {
    super(props);

    const { defaultChecked = false } = props;

    this.state = {
      checked: defaultChecked
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onCheck, disabled, checked: customChecked } = this.props;

    if (disabled) {
      return;
    }
    const checked = !(customChecked !== undefined
      ? customChecked
      : this.state.checked);

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
    const {
      className,
      value,
      children,
      checked: customChecked,
      disabled,
      name,
      style
    } = this.props;
    const { checked } = this.state;

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
                customChecked !== undefined ? customChecked : checked
            })}
          >
            <input
              type="checkbox"
              name={name}
              disabled={disabled}
              checked={customChecked !== undefined ? customChecked : checked}
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
