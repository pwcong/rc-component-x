import React from 'react';

import RcxButton, { IProps as IButtonProps } from '@rc-x/button';
import { classNames, getPrefixCls } from '@rc-x/utils';

import Radio from './radio';

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

  handleChange = (checked: boolean) => {
    const { onCheck, disabled } = this.props;
    if (disabled) {
      return;
    }
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
    const { className, children, disabled, style, ...rest } = this.props;

    return (
      <Radio
        className={classNames(baseCls, className)}
        {...rest}
        disabled={disabled}
      >
        <RcxButton disabled={disabled}>{children}</RcxButton>
      </Radio>
    );
  }
}
