import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('radio');

export interface IProps {}

const Radio = (props: IProps) => {
  return <div className={classNames(baseCls)}>Hello World!</div>;
};

export default Radio;
