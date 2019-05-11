import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import { IScreenSize } from './types';

import './style.scss';

export interface IRowProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 方向 */
  distribution?: {
    around?: Array<IScreenSize>;
    between?: Array<IScreenSize>;
  };
  /** 对齐 */
  alignment?: {
    start?: Array<IScreenSize>;
    center?: Array<IScreenSize>;
    end?: Array<IScreenSize>;
    top?: Array<IScreenSize>;
    middle?: Array<IScreenSize>;
    bottom?: Array<IScreenSize>;
  };
  /** 反向排序 */
  reverse?: boolean;
}

const baseCls = getPrefixCls('row');

const Row: React.FunctionComponent<IRowProps> = props => {
  const {
    className,
    style,
    children,
    distribution = {},
    alignment = {},
    reverse
  } = props;

  const distributionClss = {};
  Object.keys(distribution).forEach(k => {
    (distribution[k] as Array<IScreenSize>).forEach(size => {
      distributionClss[`${getPrefixCls(`${k}-${size}`, baseCls)}`] = true;
    });
  });
  const alignmentClss = {};
  Object.keys(alignment).forEach(k => {
    (alignment[k] as Array<IScreenSize>).forEach(size => {
      alignmentClss[`${getPrefixCls(`${k}-${size}`, baseCls)}`] = true;
    });
  });

  return (
    <div
      className={classNames(
        baseCls,
        className,
        distributionClss,
        alignmentClss,
        {
          [`${getPrefixCls('reverse', baseCls)}`]: reverse
        }
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Row;
