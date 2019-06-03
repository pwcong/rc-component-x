import React, { useState } from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';
import Input, { IInputProps } from '@rc-x/input';

import './style.scss';

const baseCls = getPrefixCls('input-number');

export interface IInputNumberProps extends IInputProps {
  /** 最大值 */
  max?: number;
  /** 最小值 */
  min?: number;
  /** 步数 */
  step?: number;
  /** 默认值 */
  defaultValue?: number;
  /** 当前值 */
  value?: number;
  /** 变更回调 */
  onChange?: (value: number) => void;
}

interface IForwardRefProps extends IInputNumberProps {
  forwardedRef?: React.Ref<any>;
}

const InputNumber: React.FunctionComponent<IForwardRefProps> = props => {
  const {
    className,
    forwardedRef,
    wrapperClassName,
    innerClassName,
    defaultValue,
    value: customValue,
    onChange
  } = props;

  const arrowCls = getPrefixCls('arrow', baseCls);

  const [value, setValue] = useState((defaultValue || 0).toString());

  return (
    <Input
      {...props}
      value={customValue || value}
      className={classNames(baseCls, className)}
      wrapperClassName={classNames(
        getPrefixCls('wrapper', baseCls),
        wrapperClassName
      )}
      innerClassName={classNames(
        getPrefixCls('inner', baseCls),
        innerClassName
      )}
      ref={forwardedRef}
      slot={
        <div className={getPrefixCls('tools', baseCls)}>
          <div
            className={classNames(arrowCls, getPrefixCls('up', arrowCls))}
            onClick={() => {
              // TODO
            }}
          >
            <Icon type="chevron-up" />
          </div>
          <div
            className={classNames(arrowCls, getPrefixCls('down', arrowCls))}
            onClick={() => {
              // TODO
            }}
          >
            <Icon type="chevron-down" />
          </div>
        </div>
      }
      onChange={value => {
        setValue(value);
        onChange && onChange(value);
      }}
    />
  );
};

export default React.forwardRef<any, IInputNumberProps>((props, ref) => {
  return <InputNumber {...props} forwardedRef={ref} />;
});
