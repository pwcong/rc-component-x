import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

export interface IProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 流式布局 */
  fluid?: boolean;
}

const baseCls = getPrefixCls('container');

const Container: React.FunctionComponent<IProps> = props => {
  const { className, style, fluid, children } = props;

  return (
    <div
      className={classNames(baseCls, className, {
        [`${getPrefixCls('fluid', baseCls)}`]: fluid
      })}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
