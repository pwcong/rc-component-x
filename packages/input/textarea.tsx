import React, { PureComponent } from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import { IBaseProps } from './types';

import './style.scss';

export interface IProps extends IBaseProps {}

export interface IState {
  value: string;
}

const baseCls = getPrefixCls('textarea');

export default class Textarea extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value: props.defaultValue || ''
    };
  }

  static getDerivedStateFromProps(props: IProps, state) {
    if (props.value !== undefined && props.value !== state.value) {
      return Object.assign({}, state, {
        value: props.value
      });
    }

    return state;
  }

  renderTextarea = () => {
    const { className } = this.props;

    return <textarea className={classNames(baseCls, className)} />;
  };

  render() {
    return this.renderTextarea();
  }
}
