import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('message');

export interface IProps {}

const Message = (props: IProps) => {
  return <div className={classNames(baseCls)}>Hello World!</div>;
};

export default Message;
