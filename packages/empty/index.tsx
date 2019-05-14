import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import emptyImg from './empty.svg';

import './style.scss';

const baseCls = getPrefixCls('empty');

export type IEmptySize = 'default' | 'large' | 'small';

export interface IEmptyProps {
  /** 类名 */
  className?: string;
  /** 图片，类型为 string 时表示自定义图片地址 */
  image?: string | React.ReactNode;
  /** 描述信息 */
  description?: React.ReactNode;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 图片尺寸 */
  size: IEmptySize;
}

const Empty = (props: IEmptyProps) => {
  const { className, image, description, style, size } = props;

  return (
    <div
      className={classNames(baseCls, className, {
        [`${getPrefixCls(size, baseCls)}`]: size
      })}
      style={style}
    >
      <div className={getPrefixCls('image', baseCls)}>
        {image === undefined ? (
          <img src={emptyImg} />
        ) : typeof image === 'string' ? (
          <img src={image} />
        ) : (
          image
        )}
      </div>
      {description && (
        <div className={getPrefixCls('description', baseCls)}>
          {description}
        </div>
      )}
    </div>
  );
};

export default Empty;