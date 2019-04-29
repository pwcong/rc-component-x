import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('radio');

export interface IProps {}

export interface IState {}

export default class Radio extends React.PureComponent<IProps, IState> {
  render() {
    return <div className={classNames(baseCls)}>Hello World!</div>;
  }
}
