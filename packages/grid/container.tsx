import React from 'react';

import {
  classNames,
  getPrefixCls,
  getRestProps,
  IRestProps
} from '@rc-x/utils';

import './style.scss';

export interface IContainerProps extends IRestProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 流式布局 */
  fluid?: boolean;
}

const baseCls = getPrefixCls('container');

const Container: React.FunctionComponent<IContainerProps> = props => {
  const { className, style, fluid, children } = props;

  const restProps = getRestProps(props);

  return (
    <div
      {...restProps}
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
