import React from 'react';

import Icon from '@rc-x/icon';
import {
  classNames,
  getPrefixCls,
  getRestProps,
  IRestProps
} from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('avatar');

export type IAvatarShape = 'default' | 'square' | 'circle';
export type IAvatarSize = 'default' | 'large' | 'small';

export interface IAvatarProps extends IRestProps {
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
  /** 自定义样式 */
  style?: React.CSSProperties;
}

const Avatar = (props: IAvatarProps) => {
  const { className, icon, shape, size, src, alt, style } = props;

  const restProps = getRestProps(props);

  return (
    <div
      {...restProps}
      className={classNames(baseCls, className, {
        [`${getPrefixCls(size, baseCls)}`]: size,
        [`${getPrefixCls(shape, baseCls)}`]: shape
      })}
      title={alt}
      style={style}
    >
      {src ? (
        <img className={getPrefixCls('image', baseCls)} src={src} alt={alt} />
      ) : (
        <Icon className={getPrefixCls('icon', baseCls)} type={icon || 'user'} />
      )}
    </div>
  );
};

export default Avatar;
