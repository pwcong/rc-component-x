import React from 'react';
import ReactDOM from 'react-dom';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('popover');

export type IPopoverTrigger = 'hover' | 'click';

export interface IPopoverProps {
  className?: string;
  trigger?: IPopoverTrigger;
  content: React.ReactElement;
  children: React.ReactElement;
}

export default class Popover extends React.PureComponent<IPopoverProps> {
  private node?: Element;

  handleRemoveNode = () => {
    if (this.node) {
      ReactDOM.unmountComponentAtNode(this.node);
      document.body.removeChild(this.node);
    }
  };

  handleLeave = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.handleRemoveNode();
  };

  handleTrigger = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { className, content } = this.props;

    this.node = document.createElement('div');
    document.body.appendChild(this.node);

    ReactDOM.render(
      <div className={classNames(baseCls, className)}>{content}</div>,
      this.node
    );
  };

  render() {
    const { trigger = 'hover', children } = this.props;

    const triggerProps = {
      onMouseLeave: this.handleRemoveNode
    };
    switch (trigger) {
      case 'click':
        triggerProps['onMouseDown'] = this.handleTrigger;
        break;
      default:
        triggerProps['onMouseEnter'] = this.handleTrigger;
        break;
    }

    return React.cloneElement(children, triggerProps);
  }
}
