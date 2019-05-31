import React from 'react';
import ReactDOM from 'react-dom';

import { classNames, getPrefixCls, getPagePosition } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('popover');
const wrapperCls = getPrefixCls('wrapper', baseCls);
const innerCls = getPrefixCls('inner', baseCls);

export type IPopoverTrigger = 'hover' | 'click';

export type IPopoverPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom';

export interface IPopoverProps {
  /** 自定义类名 */
  className?: string;
  /** 响应类型 */
  trigger?: IPopoverTrigger;
  /** 气泡内容 */
  content: React.ReactElement;
  /** 包裹内容 */
  children: React.ReactElement;
  /** 显示延迟 */
  showDelay?: number;
  /** 掩藏延迟 */
  hideDelay?: number;
  /** 位置 */
  placement?: IPopoverPlacement;
}

export default class Popover extends React.PureComponent<IPopoverProps> {
  private node?: Element;
  private timer?: any;

  componentWillUnmount() {
    this.handleRemoveNode();
  }

  handleRemoveTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  };

  handleRemoveNode = () => {
    if (this.node) {
      ReactDOM.unmountComponentAtNode(this.node);
      document.body.removeChild(this.node);
      this.node = undefined;
    }
  };

  handleCreateNode = () => {
    this.handleRemoveNode();
    this.node = document.createElement('div');
    this.node.className = wrapperCls;
    this.node.setAttribute('style', `opacity:0;`);
    document.body.appendChild(this.node);
  };

  handleLeave = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { hideDelay = 0 } = this.props;

    this.handleRemoveTimer();
    this.timer = setTimeout(() => {
      this.handleRemoveNode();
    }, hideDelay);
  };

  handleTrigger = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { content, className, placement = 'top', showDelay = 0 } = this.props;
    const node = event.target as HTMLElement;

    this.handleRemoveTimer();
    this.timer = setTimeout(() => {
      this.handleCreateNode();

      if (!this.node) {
        return;
      }

      let x = 0;
      let y = 0;
      const { left, top, height, width } = getPagePosition(node);
      switch (placement) {
        case 'top':
          x = left + width / 2;
          y = top;
          break;
        case 'topLeft':
        case 'leftTop':
          x = left;
          y = top;
          break;
        case 'topRight':
        case 'rightTop':
          x = left + width;
          y = top;
          break;
        case 'bottom':
          x = left + width / 2;
          y = top + height;
          break;
        case 'bottomLeft':
        case 'leftBottom':
          x = left;
          y = top + height;
          break;
        case 'bottomRight':
        case 'rightBottom':
          x = left + width;
          y = top + height;
          break;
        case 'left':
          x = left;
          y = top + height / 2;
          break;
        case 'right':
          x = left + width;
          y = top + height / 2;
          break;
        default:
          break;
      }

      this.node.setAttribute('style', `left:${x}px;top:${y}px`);
      ReactDOM.render(
        <div
          className={classNames(
            innerCls,
            getPrefixCls(placement.toLocaleLowerCase(), innerCls)
          )}
        >
          <div className={classNames(baseCls, className)}>{content}</div>
        </div>,
        this.node,
        () => {
          this.handleRemoveTimer();
          this.node &&
            this.node.setAttribute(
              'style',
              `left:${x}px;top:${y}px;opacity:1;`
            );
        }
      );
    }, showDelay);
  };

  render() {
    const { trigger = 'hover', children } = this.props;

    const triggerProps = {
      onMouseLeave: this.handleLeave
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
