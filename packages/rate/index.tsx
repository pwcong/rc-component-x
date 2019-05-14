import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('rate');

export interface IProps {}

const Rate = (props: IProps) => {
  return <div className={classNames(baseCls)}>Hello World!</div>;
};

export default Rate;
