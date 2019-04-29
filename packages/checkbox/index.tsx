import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('checkbox');

export interface IProps {}

const Checkbox = (props: IProps) => {
  return <div className={classNames(baseCls)}>Hello World!</div>;
};

export default Checkbox;
