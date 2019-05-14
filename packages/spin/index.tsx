import React from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('spin');

export type ISpinSize = 'default' | 'small' | 'large';

export interface ISpinProps {
  /** 容器类名 */
  wrapperClassName?: string;
  /** 类名 */
  className?: string;
  /** 尺寸 */
  size?: ISpinSize;
  /** 提示信息 */
  tip?: React.ReactNode;
  /** 图标类型 */
  type?: string;
  /** 加载中 */
  spinning?: boolean;
  /** 子内容 */
  children?: React.ReactNode;
}

const Spin = (props: ISpinProps) => {
  const {
    wrapperClassName,
    className,
    size,
    tip,
    type,
    spinning,
    children
  } = props;

  const spin =
    type === undefined ? (
      <span
        className={classNames(baseCls, className, {
          [`${getPrefixCls(size, baseCls)}`]: size,
          [`${getPrefixCls('spinning', baseCls)}`]: spinning
        })}
      >
        <span className={getPrefixCls('indicator', baseCls)} />
        <span className={getPrefixCls('indicator', baseCls)} />
        <span className={getPrefixCls('indicator', baseCls)} />
        <span className={getPrefixCls('indicator', baseCls)} />
      </span>
    ) : (
      <Icon
        className={classNames(getPrefixCls('icon', baseCls), {
          [`${getPrefixCls(size, getPrefixCls('icon', baseCls))}`]: size
        })}
        type={type}
        spin={spinning}
      />
    );

  if (children !== undefined) {
    return (
      <div
        className={classNames(
          getPrefixCls('wrapper', baseCls),
          wrapperClassName
        )}
      >
        {spinning && (
          <div className={getPrefixCls('inner', baseCls)}>
            {spin}
            {tip && <div className={getPrefixCls('tip', baseCls)}>{tip}</div>}
          </div>
        )}

        {children}
      </div>
    );
  }

  return spin;
};

export default Spin;
