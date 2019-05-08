import React from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

export type IButtonHtmlType = 'submit' | 'reset' | 'button';
export type IButtonType =
  | 'primary'
  | 'default'
  | 'warning'
  | 'danger'
  | 'success';
export type IButtonSize = 'large' | 'default' | 'small';
export type IButtonShape = 'default' | 'round' | 'circle' | 'link';
export type IButtonTarget = '_blank' | '_self';

export interface IProps {
  /** 类名 */
  className?: string;
  /** 子内容 */
  children?: React.ReactNode;
  /** 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * HTML类型
   * @default button
   */
  htmlType?: IButtonHtmlType;
  /**
   * 类型
   * @default default
   */
  type?: IButtonType;
  /**
   * 边框形状
   * @default round
   */
  shape?: IButtonShape;
  /**
   * 尺寸
   * @default default
   */
  size?: IButtonSize;
  /** 图标 */
  icon?: string;
  /** 禁用 */
  disabled?: boolean;
  /** 链接地址 */
  href?: string;
  /**
   * 链接窗口模式
   * @default _self
   */
  target?: IButtonTarget;
  /** 是否加载中 */
  loading?: boolean;
  /** block模式 */
  block?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 选中状态 */
  checked?: boolean;
}

const baseCls = getPrefixCls('button');

const Button: React.FunctionComponent<IProps> = (props: IProps) => {
  const {
    className,
    children,
    onClick,
    htmlType = 'button',
    type = 'default',
    shape = 'default',
    size = 'default',
    icon,
    disabled,
    href,
    target = '_self',
    loading,
    block,
    checked
  } = props;

  return (
    <button
      className={classNames(
        baseCls,
        className,
        getPrefixCls(size, baseCls),
        getPrefixCls(shape, baseCls),
        getPrefixCls(type, baseCls),
        {
          [`${getPrefixCls('disabled', baseCls)}`]: disabled,
          [`${getPrefixCls('loading', baseCls)}`]: loading,
          [`${getPrefixCls('block', baseCls)}`]: block,
          [`${getPrefixCls('checked', baseCls)}`]: checked
        }
      )}
      onClick={
        loading || disabled
          ? undefined
          : href
          ? () => {
              window.open(href, target);
            }
          : onClick
      }
      type={htmlType}
    >
      {(icon || loading) && (
        <Icon type={icon || (loading ? 'loader' : '')} spin={loading} />
      )}
      {children}
    </button>
  );
};

Button.defaultProps = {
  htmlType: 'button',
  size: 'default',
  shape: 'default',
  type: 'default',
  target: '_self'
};

export default Button;
