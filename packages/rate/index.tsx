import React from 'react';

import Icon, { IIconProps } from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('rate');

export interface IRateProps {
  className?: string;
  allowClear?: boolean;
  allowHalf?: boolean;
  character?: string | React.ReactElement<IIconProps>;
  count?: number;
  value?: number;
  defaultValue?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
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

    const { hoverValue, value: stateValue } = this.state;

    const value =
      hoverValue !== undefined
        ? hoverValue
        : customValue !== undefined
        ? customValue
        : stateValue;

    return (
      <div
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
