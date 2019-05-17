import React from 'react';

import Icon, { IIconProps } from '@rc-x/icon';
import {
  classNames,
  getPrefixCls,
  getRestProps,
  IRestProps
} from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('rate');

export interface IRateProps extends IRestProps {
  /** 类名 */
  className?: string;
  /** 允许清除 */
  allowClear?: boolean;
  /** 允许一半 */
  allowHalf?: boolean;
  /** 自定义字符 */
  character?: string | React.ReactElement<IIconProps>;
  /** 数值范围 */
  count?: number;
  /** 自定义数值 */
  value?: number;
  /** 默认数值 */
  defaultValue?: number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 变更回调 */
  onChange?: (value: number) => void;
}

export interface IState {
  value: number;
  hoverValue?: number;
}

export default class Rate extends React.PureComponent<IRateProps, IState> {
  static defaultProps: IRateProps = {
    character: <Icon type="star" />,
    count: 5
  };

  constructor(props: IRateProps) {
    super(props);

    this.state = {
      value: props.defaultValue !== undefined ? props.defaultValue : 0,
      hoverValue: undefined
    };
  }

  handleChange = (value: number) => {
    const { disabled, allowClear, onChange } = this.props;

    if (disabled) {
      return;
    }

    if (allowClear && value === this.state.value) {
      this.setState({
        value: 0
      });
      onChange && onChange(0);
    } else {
      this.setState({
        value
      });
      onChange && onChange(value);
    }
  };

  render() {
    const {
      className,
      allowHalf,
      character,
      count,
      value: customValue,
      disabled,
      style
    } = this.props;

    const restProps = getRestProps(this.props);

    const { hoverValue, value: stateValue } = this.state;

    const value =
      hoverValue !== undefined
        ? hoverValue
        : customValue !== undefined
        ? customValue
        : stateValue;

    return (
      <div
        {...restProps}
        className={classNames(baseCls, className, {
          [`${getPrefixCls('disabled', baseCls)}`]: disabled
        })}
        onMouseLeave={() => {
          this.setState({
            hoverValue: undefined
          });
        }}
        style={style}
      >
        {Array.from(new Array(count)).map((_, index) => {
          const cls = getPrefixCls('star', baseCls);

          return (
            <div key={`${cls}-${index}`} className={cls}>
              {allowHalf && (
                <div
                  onMouseEnter={() => {
                    !disabled &&
                      this.setState({
                        hoverValue: index + 0.5
                      });
                  }}
                  onClick={() => {
                    this.handleChange(index + 0.5);
                  }}
                  className={classNames(getPrefixCls('first', cls), {
                    [`${getPrefixCls('active', cls)}`]: index + 0.5 <= value
                  })}
                >
                  {character}
                </div>
              )}
              <div
                onMouseEnter={() => {
                  !disabled &&
                    this.setState({
                      hoverValue: index + 1
                    });
                }}
                onClick={() => {
                  this.handleChange(index + 1);
                }}
                className={classNames(getPrefixCls('second', cls), {
                  [`${getPrefixCls('active', cls)}`]: index + 1 <= value
                })}
              >
                {character}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
