import React from 'react';
import ReactDOM from 'react-dom';

import { classNames, getPrefixCls, getPagePosition } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('popover');

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
  /** 默认显示状态 */
  defaultVisible?: boolean;
  /** 显示状态 */
  visible?: boolean;
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
  private node: Element;

  constructor(props: IPopoverProps) {
    super(props);

    const { defaultVisible } = props;

    this.node = document.createElement('div');
    this.node.className = getPrefixCls('wrapper', baseCls);
    this.node.setAttribute(
      'style',
      `display: ${
        (defaultVisible !== undefined
        ? defaultVisible
        : false)
          ? 'block'
          : 'none'
      };`
    );
    document.body.appendChild(this.node);
  }

  componentDidMount() {
    const { content, className } = this.props;

    ReactDOM.render(
      <div className={classNames(baseCls, className)}>{content}</div>,
      this.node
    );
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    document.body.removeChild(this.node);
  }

  handleLeave = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    this.node.setAttribute('style', 'display: none;');
  };

  handleTrigger = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const node = event.target as HTMLElement;
    const { offsetWidth, offsetHeight } = node;
    const { x, y } = getPagePosition(node);

    this.node.setAttribute(
      'style',
      `display:block;left:${x + offsetWidth / 2}px;top:${offsetHeight + y}px`
    );
  };

  render() {
    const { trigger = 'hover', children } = this.props;

    const triggerProps = {
      // onMouseLeave: this.handleLeave
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
