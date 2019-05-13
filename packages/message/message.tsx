import React from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('message');

export type IMessageType = 'info' | 'loading' | 'success' | 'warning' | 'error';

export interface IMessageProps {
  /** 类名 */
  className?: string;
  type?: IMessageType;
  content: React.ReactNode;
}

const Message = (props: IMessageProps) => {
  const { className, type, content } = props;

  let iconType = '';
  switch (type) {
    case 'info':
      iconType = 'info';
      break;
    case 'loading':
      iconType = 'loader';
      break;
    case 'warning':
      iconType = 'alert-circle';
      break;
    case 'success':
      iconType = 'check-circle';
      break;
    case 'error':
      iconType = 'x-circle';
      break;
    default:
      break;
  }

  return (
    <div
      className={classNames(baseCls, className, getPrefixCls(type, baseCls))}
    >
      <span className={getPrefixCls('icon', baseCls)}>
        <Icon type={iconType} spin={type === 'loading'} />
      </span>
      <span className={getPrefixCls('content', baseCls)}>{content}</span>
    </div>
  );
};

export default Message;
