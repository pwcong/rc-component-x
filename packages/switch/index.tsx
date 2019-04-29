import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('switch');

export interface IProps {}

const Switch = (props: IProps) => {
  return <div className={classNames(baseCls)}>Hello World!</div>;
};

export default Switch;
