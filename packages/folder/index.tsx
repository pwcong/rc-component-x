import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import { IBaseProps } from './types';
import Panel from './panel';
import MotionPanel from './motion-panel';

import './style.scss';

export interface IProps extends IBaseProps {
  /** 类名 */
  className?: string;
  /**
   * 是否使用动画
   * @default true
   */
  useMotion?: boolean;
}

export default React.forwardRef<any, IProps>((props, ref) => {
  const { className, useMotion } = props;

  return (
    <div className={classNames(getPrefixCls('folder'), className)}>
      {useMotion === false ? (
        <Panel {...props} ref={ref} />
      ) : (
        <MotionPanel {...props} ref={ref} />
      )}
    </div>
  );
});