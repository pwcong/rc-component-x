import React from 'react';

import icons from './icons';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

export interface IProps {
  /** 类名 */
  className?: string;
  /** 类型 */
  type?: string;
  /** 旋转度数 */
  rotate?: number;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 是否旋转 */
  spin?: boolean;
}

const baseCls = getPrefixCls('icon');

const Icon: React.FunctionComponent<IProps> = props => {
  const {
    className,
    type = 'loader',
    rotate,
    style: customStyle,
    spin
  } = props;

  const style: React.CSSProperties = customStyle || {};
  if (rotate !== undefined) {
    style.transform = `rotate(${rotate}deg)`;
  }

  return (
    <i
      className={classNames(baseCls, className, {
        [`${baseCls}-spin`]: spin
      })}
      style={style}
    >
      {icons[type] ? React.createElement(icons[type]) : null}
    </i>
  );
};

Icon.defaultProps = {
  type: 'loader'
};

export default Icon;
