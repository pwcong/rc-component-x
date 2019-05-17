import React from 'react';

import Button, { IButtonProps } from '@rc-x/button';
import {
  classNames,
  getPrefixCls,
  IRestProps,
  getRestProps
} from '@rc-x/utils';

import Radio from './radio';

import { IBaseProps } from './types';

import './style.scss';

const baseCls = getPrefixCls('radio-button');

export type IRadioButtonProps = IBaseProps & IButtonProps & IRestProps & {};
interface IState {
  checked: boolean;
}

export default class RadioButton extends React.PureComponent<
  IRadioButtonProps,
  IState
> {
  constructor(props: IRadioButtonProps) {
    super(props);
    const { defaultChecked = false } = props;
    this.state = {
      checked: defaultChecked
    };
  }

  handleChange = e => {
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
      children,
      disabled,
      style,
      checked: customChecked
    } = this.props;

    const restProps = getRestProps(this.props);
    const otherProps = getRestProps(this.props, true);

    const { checked } = this.state;

    return (
      <Radio
        {...restProps}
        {...otherProps}
        className={classNames(baseCls)}
        disabled={disabled}
        checked={customChecked !== undefined ? customChecked : checked}
      >
        <Button
          {...otherProps}
          className={className}
          style={style}
          disabled={disabled}
          onClick={this.handleChange}
          type="primary"
          checked={customChecked !== undefined ? customChecked : checked}
        >
          {children}
        </Button>
      </Radio>
    );
  }
}
