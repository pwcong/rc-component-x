import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('popover');

export interface IProps {}

const Popover = (props: IProps) => {
  return <div className={classNames(baseCls)}>Hello World!</div>;
};

export default Popover;
