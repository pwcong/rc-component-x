import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('input');

export interface IProps {}

const Input = (props: IProps) => {
  return <div className={classNames(baseCls)}>Hello World!</div>;
};

export default Input;
