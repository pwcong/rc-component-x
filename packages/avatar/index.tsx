import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('avatar');

export type IAvatarShape = 'default' | 'square' | 'circle';
export type IAvatarSize = 'default' | 'large' | 'small';

export interface IAvatarProps {
  /** 类名 */
  className?: string;
  /** 图标 */
  icon?: string;
  /** 形状 */
  shape?: IAvatarShape;
  /** 尺寸 */
  size?: IAvatarSize;
  /** 图片地址 */
  src?: string;
  /** 替代文本 */
  alt?: string;
}

const Avatar = (props: IAvatarProps) => {
  return <div className={classNames(baseCls)}>Hello World!</div>;
};

export default Avatar;
