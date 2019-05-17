import React from 'react';

import {
  classNames,
  getPrefixCls,
  getRestProps,
  IRestProps
} from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('badge');

export type IBadgeType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error';

export type IBadgeSize = 'default' | 'large' | 'small';

export type IBadgeShape = 'square' | 'round';

export interface IBadgeProps extends IRestProps {
  /** 类名 */
  className?: string;
  /** 标题 */
  title?: string;
  /** 类型 */
  type?: IBadgeType;
  /** 只显示点 */
  dot?: boolean;
  /** 尺寸 */
  size?: IBadgeSize;
  /** 颜色，若设置颜色则 type 属性失效 */
  color?: string;
  /** 位置偏移 */
  offset?: {
    x?: number;
    y?: number;
  };
  /** 形状 */
  shape?: IBadgeShape;
  /** 子内容 */
  children?: React.ReactNode;
}

const Badge: React.FunctionComponent<IBadgeProps> = props => {
  const {
    className,
    title,
    type = 'default',
    size = 'default',
    shape = 'round',
    dot,
    color,
    offset = {},
    children
  } = props;

  const restProps = getRestProps(props);

  const { x = 0, y = 0 } = offset;

  const badge = (
    <div
      className={classNames(baseCls, className, {
        [`${getPrefixCls(size, baseCls)}`]: size,
        [`${getPrefixCls(type, baseCls)}`]: type,
        [`${getPrefixCls(shape, baseCls)}`]: shape,
        [`${getPrefixCls('dot', baseCls)}`]: dot
      })}
      title={title}
      style={{
        backgroundColor: color,
        top: y,
        left: x
      }}
    >
      <span>{title}</span>
    </div>
  );

  if (children !== undefined) {
    return (
      <div {...restProps} className={getPrefixCls('wrapper', baseCls)}>
        <div className={getPrefixCls('inner', baseCls)}>{badge}</div>
        {children}
      </div>
    );
  }

  return React.cloneElement(badge, {
    ...restProps
  });
};

Badge.defaultProps = {
  size: 'default',
  type: 'default',
  shape: 'round',
  offset: {}
};

export default Badge;
