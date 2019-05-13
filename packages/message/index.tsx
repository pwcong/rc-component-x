// import React from 'react';
// import ReactDOM from 'react-dom';

import { getPrefixCls, classNames } from '@rc-x/utils';
import { IMessageProps } from './message';

const baseCls = getPrefixCls('messages');

let messages = window['RC_X_MESSAGES'];
if (!messages) {
  messages = window['RC_X_MESSAGES'] = document.createElement('div');
  messages.className = classNames(baseCls);
}

export type IMessageOption = IMessageProps & {};

export default {
  info: (option: IMessageOption) => {},
  loading: (option: IMessageOption) => {},
  success: (option: IMessageOption) => {},
  warning: (option: IMessageOption) => {},
  error: (option: IMessageOption) => {}
};
