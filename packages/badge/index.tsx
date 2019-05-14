import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('badge');

export type IBadgeType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error';

export type IBadgeSize = 'default' | 'large' | 'small';

export interface IBadgeProps {
  /** 类名 */
  className?: string;
  /** 标题 */
  title?: string;
  /** 类型 */
  type?: IBadgeType;
  /** 尺寸 */
  size?: IBadgeSize;
  /** 颜色，若设置颜色则 type 属性失效 */
  color?: string;
  /** 位置偏移 */
  offset?: {
    x: number;
    y: number;
  };
}

const Badge = (props: IBadgeProps) => {
  return <div className={classNames(baseCls)}>Hello World!</div>;
};

export default Badge;
