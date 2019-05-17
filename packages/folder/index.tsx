import React from 'react';

import {
  classNames,
  getPrefixCls,
  getRestProps,
  IRestProps
} from '@rc-x/utils';

import { IBaseProps } from './types';
import Panel from './panel';
import MotionPanel from './motion-panel';

import './style.scss';

export * from './panel';
export * from './motion-panel';

export interface IFolderProps extends IBaseProps, IRestProps {
  /** 类名 */
  className?: string;
  /**
   * 是否使用动画
   * @default true
   */
  useMotion?: boolean;
}

export default React.forwardRef<any, IFolderProps>((props, ref) => {
  const { className, useMotion } = props;

  const restProps = getRestProps(props);

  return (
    <div
      {...restProps}
      className={classNames(getPrefixCls('folder'), className)}
    >
      {useMotion === false ? (
        <Panel {...props} ref={ref} />
      ) : (
        <MotionPanel {...props} ref={ref} />
      )}
    </div>
  );
});
