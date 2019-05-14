import React from 'react';
import ReactDOM from 'react-dom';

import { getPrefixCls } from '@rc-x/utils';
import Message, { IMessageProps } from './message';

export type IMessageOption = IMessageProps & {
  /** 延迟 */
  duration?: number;
  /** 关闭回调 */
  onClose?: () => void;
};

export class MessageItem {
  private container: HTMLDivElement;
  private item: HTMLDivElement;
  private option: IMessageOption;

  private isShow = false;
  private isClose = false;

  constructor(container: HTMLDivElement, option: IMessageOption) {
    this.container = container;
    this.option = option;

    this.item = document.createElement('div');
    this.item.className = getPrefixCls('message-item');
    this.container.appendChild(this.item);
  }

  show() {
    if (this.isShow) {
      return this;
    }
    this.isShow = true;

    ReactDOM.render(<Message {...this.option} />, this.item);
    return this;
  }

  hide() {
    if (this.isClose) {
      return;
    }
    this.isClose = true;
    ReactDOM.unmountComponentAtNode(this.item);
    this.container.removeChild(this.item);

    this.option.onClose && this.option.onClose();
  }
}

export class Messages {
  private container: HTMLDivElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = getPrefixCls('messages');
    document.body.appendChild(this.container);
  }

  static getInstance(): Messages {
    if (!window['RC_X_MESSAGES']) {
      window['RC_X_MESSAGES'] = new Messages();
    }

    return window['RC_X_MESSAGES'];
  }

  build(option: IMessageOption) {
    const { type, duration = 3000 } = option;

    const item = new MessageItem(this.container, option);
    if (type !== 'loading') {
      setTimeout(() => {
        item.hide();
      }, duration);
    }

    item.show();
    return item;
  }
}

export default {
  info: (option: IMessageOption) => {
    return Messages.getInstance().build({
      ...option,
      type: 'info'
    });
  },
  loading: (option: IMessageOption) => {
    return Messages.getInstance().build({
      ...option,
      type: 'loading'
    });
  },
  success: (option: IMessageOption) => {
    return Messages.getInstance().build({
      ...option,
      type: 'success'
    });
  },
  warning: (option: IMessageOption) => {
    return Messages.getInstance().build({
      ...option,
      type: 'warning'
    });
  },
  error: (option: IMessageOption) => {
    return Messages.getInstance().build({
      ...option,
      type: 'error'
    });
  }
};
