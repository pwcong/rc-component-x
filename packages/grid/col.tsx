import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

export type IColGridValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type IColGridSize = {
  xs?: IColGridValue | boolean;
  sm?: IColGridValue | boolean;
  md?: IColGridValue | boolean;
  lg?: IColGridValue | boolean;
};

export type IColGridOffset = {
  xs?: IColGridValue;
  sm?: IColGridValue;
  md?: IColGridValue;
  lg?: IColGridValue;
};

export type IColReordering = {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
};

export interface IColGrid {
  size?: IColGridSize;
  offset?: IColGridOffset;
}

export interface IColProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 栅格 */
  grid?: IColGrid;
  /** 置头 */
  reordering?: {
    first?: IColReordering;
    last?: IColReordering;
  };
}

const baseCls = getPrefixCls('col');

const Row: React.FunctionComponent<IColProps> = props => {
  const { className, style, children, grid = {}, reordering = {} } = props;

  const { size = {}, offset = {} } = grid;
  const gridClss = {};
  Object.keys(size).forEach(k => {
    const v = size[k];
    if (typeof v === 'boolean') {
      if (v) {
        gridClss[`${getPrefixCls(k, baseCls)}`] = true;
      }
    } else {
      gridClss[`${getPrefixCls(`${k}-${v}`, baseCls)}`] = true;
    }
  });
  Object.keys(offset).forEach(k => {
    const v = offset[k];
    gridClss[`${getPrefixCls(`${k}-offset-${v}`, baseCls)}`] = true;
  });

  const reorderingClss = {};
  Object.keys(reordering).forEach(k => {
    Object.keys(reordering[k]).forEach(_k => {
      const v = reordering[k][_k];
      if (v) {
        reorderingClss[`${getPrefixCls(`${k}-${_k}`, baseCls)}`] = true;
      }
    });
  });

  return (
    <div
      className={classNames(baseCls, className, gridClss, reorderingClss)}
      style={style}
    >
      {children}
    </div>
  );
};

export default Row;
