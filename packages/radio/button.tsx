import React from 'react';

import Button, { IProps as IButtonProps } from '@rc-x/button';
import { classNames, getPrefixCls } from '@rc-x/utils';

import Radio from './radio';

import { IBaseProps } from './types';

import './style.scss';

const baseCls = getPrefixCls('radio-button');

export type IProps = IBaseProps & IButtonProps & {};
export interface IState {
  checked: boolean;
}

export default class RadioButton extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
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
      checked: customChecked,
      ...rest
    } = this.props;

    const { checked } = this.state;

    return (
      <Radio
        {...rest}
        className={classNames(baseCls)}
        disabled={disabled}
        checked={customChecked !== undefined ? customChecked : checked}
      >
        <Button
          {...rest}
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
