import React from 'react';

import icons from './icons';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

export interface IProps {
  className?: string;
  type?: string;
  rotate?: number;
  style?: React.CSSProperties;
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
