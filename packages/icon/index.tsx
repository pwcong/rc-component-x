import React from 'react';

import icons from './icons';

import {
  classNames,
  getPrefixCls,
  getRestProps,
  IRestProps
} from '@rc-x/utils';

import './style.scss';

export interface IIconProps extends IRestProps {
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
  /** 点击事件 */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const baseCls = getPrefixCls('icon');

const Icon: React.FunctionComponent<IIconProps> = props => {
  const {
    className,
    type = 'loader',
    rotate,
    style: customStyle,
    spin,
    onClick
  } = props;

  const restProps = getRestProps(props);

  const style: React.CSSProperties = customStyle || {};
  if (rotate !== undefined) {
    style.transform = `rotate(${rotate}deg)`;
  }

  return (
    <i
      {...restProps}
      className={classNames(baseCls, className, {
        [`${baseCls}-spin`]: spin
      })}
      style={style}
      onClick={onClick}
    >
      {icons[type] ? React.createElement(icons[type]) : null}
    </i>
  );
};

Icon.defaultProps = {
  type: 'loader'
};

export default Icon;
