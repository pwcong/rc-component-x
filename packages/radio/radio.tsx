import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';
import { IBaseProps } from './types';

import './style.scss';

const baseCls = getPrefixCls('radio');

export interface IRadioProps extends IBaseProps {}

interface IState {
  checked: boolean;
}

export default class Radio extends React.PureComponent<IRadioProps, IState> {
  constructor(props: IRadioProps) {
    super(props);

    const { defaultChecked = false } = props;

    this.state = {
      checked: defaultChecked
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onCheck, disabled } = this.props;
    if (disabled) {
      return;
    }
    this.setState(
      {
        checked: true
      },
      () => {
        onCheck && onCheck(true);
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
              type="radio"
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
