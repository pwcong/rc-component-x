import React, { PureComponent } from 'react';

import {
  classNames,
  getPrefixCls,
  getRestProps,
  IRestProps
} from '@rc-x/utils';
import Icon from '@rc-x/icon';

import { IBaseProps } from './types';

import './style.scss';

const baseCls = getPrefixCls('input');

export type IInputSize = 'default' | 'large' | 'small';

export interface IInputProps extends IBaseProps, IRestProps {
  /**
   * 大小
   * @default default
   */
  size?: IInputSize;
  /** 前缀图标 */
  prefix?: string | React.ReactNode;
  /** 后缀图标 */
  suffix?: string | React.ReactNode;
  /** 自定义内容插槽 */
  slot?: React.ReactNode;
  /** 允许清除 */
  allowClear?: boolean;
  /** 回车键回调 */
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** 前置内容 */
  addonBefore?: React.ReactNode;
  /** 后置内容 */
  addonAfter?: React.ReactNode;
  /** HTML类型 */
  htmlType?: string;
}

interface IForwardRefProps extends IInputProps {
  forwardedRef?: React.Ref<any>;
}

interface IState {
  value: string;
}

class Input extends PureComponent<IForwardRefProps, IState> {
  static defaultProps: IForwardRefProps = {
    size: 'default',
    htmlType: 'text'
  };

  constructor(props: IForwardRefProps) {
    super(props);

    const { defaultValue } = this.props;

    this.state = {
      value: defaultValue !== undefined ? defaultValue : ''
    };
  }

  static getDerivedStateFromProps(props: IForwardRefProps, state) {
    if (props.value !== undefined && props.value !== state.value) {
      return Object.assign({}, state, {
        value: props.value
      });
    }

    return state;
  }

  handleChange = e => {
    const { onChange } = this.props;
    const value = e.target.value;
    this.setState({ value }, () => {
      onChange && onChange(value);
    });
  };

  handleClear = e => {
    const { onChange } = this.props;
    this.setState({ value: '' }, () => {
      onChange && onChange('');
    });
  };

  renderInput = () => {
    const {
      id,
      name,
      className,
      htmlType,
      size,
      disabled,
      forwardedRef,
      onPressEnter
    } = this.props;

    const { value } = this.state;

    return (
      <input
        id={id}
        name={name}
        ref={forwardedRef}
        className={classNames(baseCls, className, `${baseCls}-${size}`, {
          [`${baseCls}-disabled`]: disabled
        })}
        type={htmlType}
        value={value}
        onKeyPress={e => {
          e.key === 'Enter' && onPressEnter && onPressEnter(e);
        }}
        onChange={this.handleChange}
      />
    );
  };

  renderAddon = (node: React.ReactNode, position: 'before' | 'after') => {
    const cls = getPrefixCls('addon', baseCls);

    return (
      <div className={classNames(cls, getPrefixCls(position, cls))}>{node}</div>
    );
  };

  render() {
    const {
      prefix,
      suffix,
      slot,
      addonBefore,
      addonAfter,
      allowClear,
      size,
      wrapperClassName: customWrapperCls,
      innerClassName: customInnerCls
    } = this.props;

    const restProps = getRestProps(this.props);

    if (prefix || suffix || addonBefore || addonAfter || allowClear || slot) {
      const wrapperCls = getPrefixCls('wrapper', baseCls);
      const innerCls = getPrefixCls('inner', baseCls);

      return (
        <div
          {...restProps}
          className={classNames(
            customWrapperCls,
            wrapperCls,
            `${wrapperCls}-${size}`,
            {
              [`${getPrefixCls('has-addon', wrapperCls)}`]:
                addonBefore || addonAfter,
              [`${getPrefixCls('has-addon-before', wrapperCls)}`]: addonBefore,
              [`${getPrefixCls('has-addon-after', wrapperCls)}`]: addonAfter
            }
          )}
        >
          {addonBefore && this.renderAddon(addonBefore, 'before')}
          {prefix || suffix || allowClear || slot ? (
            <div
              className={classNames(customInnerCls, innerCls, {
                [`${getPrefixCls('has-prefix', innerCls)}`]: prefix,
                [`${getPrefixCls('has-suffix', innerCls)}`]: suffix,
                [`${getPrefixCls('has-clear', innerCls)}`]: allowClear
              })}
            >
              {this.renderInput()}
              {prefix && (
                <div className={getPrefixCls('prefix', baseCls)}>
                  {typeof prefix === 'string' ? <Icon type={prefix} /> : prefix}
                </div>
              )}
              {suffix || allowClear ? (
                <div className={getPrefixCls('suffix', baseCls)}>
                  {suffix && typeof suffix === 'string' ? (
                    <Icon type={suffix} />
                  ) : (
                    suffix
                  )}
                  {allowClear &&
                    this.state.value !== undefined &&
                    this.state.value !== '' && (
                      <Icon
                        onClick={this.handleClear}
                        className={getPrefixCls('clear', baseCls)}
                        type="x-circle"
                      />
                    )}
                </div>
              ) : (
                undefined
              )}
              {slot && (
                <div className={getPrefixCls('slot', baseCls)}>{slot}</div>
              )}
            </div>
          ) : (
            this.renderInput()
          )}
          {addonAfter && this.renderAddon(addonAfter, 'after')}
        </div>
      );
    }

    return React.cloneElement(this.renderInput(), {
      ...restProps
    });
  }
}

export default React.forwardRef<any, IInputProps>((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});
