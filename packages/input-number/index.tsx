import React, { useState } from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';
import Input, { IInputProps } from '@rc-x/input';

import './style.scss';

const baseCls = getPrefixCls('input-number');

const defaultStep = 1;
const defaultParser = (value: string) => Number(value);
const defaultFormatter = (value: number | string) => value.toString();
const defaultDecimalSeparator = '.';

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
  /** 数值精度 */
  precision?: number;
  /** 小数点 */
  decimalSeparator?: string;
  /** 变更回调 */
  onChange?: (value: number) => void;
  /** 字符转数字 */
  formatter?: (value: number | string) => string;
  /** 数字转字符 */
  parser: (value: string) => number;
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
    min,
    max,
    step = defaultStep,
    precision,
    decimalSeparator = defaultDecimalSeparator,
    formatter: customFormatter = defaultFormatter,
    parser: customParser = defaultParser,
    onChange
  } = props;

  const formatter = (value: number) => {
    if (precision !== undefined) {
      return customFormatter(
        !decimalSeparator || decimalSeparator === defaultDecimalSeparator
          ? value.toFixed(precision)
          : value.toFixed(precision).replace('.', decimalSeparator)
      );
    }

    return customFormatter(
      !decimalSeparator || decimalSeparator === defaultDecimalSeparator
        ? value.toString()
        : value.toString().replace('.', decimalSeparator)
    );
  };

  const valid = (value: number) => {
    if (min !== undefined && value < min) {
      return min;
    }
    if (max !== undefined && value > max) {
      return max;
    }

    return value;
  };

  const parser = (value: string) => {
    let v = customParser(
      !decimalSeparator || decimalSeparator === defaultDecimalSeparator
        ? value
        : value.replace(decimalSeparator, '.')
    );

    console.log(v);

    if (precision !== undefined) {
      return Number(v.toFixed(precision));
    }
    return v;
  };

  const arrowCls = getPrefixCls('arrow', baseCls);

  const [stateValue, setStateValue] = useState(
    defaultValue !== undefined ? defaultValue : 0
  );
  const [displayValue, setDisplayValue] = useState(
    formatter(customValue !== undefined ? customValue : stateValue)
  );

  return (
    <Input
      {...props}
      value={displayValue}
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
              const nextValue =
                customValue !== undefined
                  ? customValue + step
                  : stateValue + step;
              if (precision !== undefined) {
                const v = valid(Number(nextValue.toFixed(precision)));
                setStateValue(v);
                onChange && onChange(v);
                setDisplayValue(formatter(v));
              } else {
                const v = valid(nextValue);
                setStateValue(v);
                onChange && onChange(v);
                setDisplayValue(formatter(v));
              }
            }}
          >
            <Icon type="chevron-up" />
          </div>
          <div
            className={classNames(arrowCls, getPrefixCls('down', arrowCls))}
            onClick={() => {
              const nextValue =
                customValue !== undefined
                  ? customValue - step
                  : stateValue - step;

              if (precision !== undefined) {
                const v = valid(Number(nextValue.toFixed(precision)));
                setStateValue(v);
                onChange && onChange(v);
                setDisplayValue(formatter(v));
              } else {
                const v = valid(nextValue);
                setStateValue(v);
                onChange && onChange(v);
                setDisplayValue(formatter(v));
              }
            }}
          >
            <Icon type="chevron-down" />
          </div>
        </div>
      }
      onChange={value => {
        if (value === undefined || value === '') {
          setStateValue(0);
          onChange && onChange(0);
          setDisplayValue(formatter(0));
        } else {
          if (/^.*\.$/.test(value)) {
            setDisplayValue(value);
          } else {
            const res = parser(value);
            if (!isNaN(res)) {
              const v = valid(res);
              setStateValue(v);
              onChange && onChange(v);
              setDisplayValue(formatter(v));
            } else {
              setDisplayValue(value);
            }
          }
        }
      }}
    />
  );
};

InputNumber.defaultProps = {
  step: defaultStep,
  decimalSeparator: defaultDecimalSeparator,
  formatter: defaultFormatter,
  parser: defaultParser
};

export default React.forwardRef<any, IInputNumberProps>((props, ref) => {
  return <InputNumber {...props} forwardedRef={ref} />;
});
