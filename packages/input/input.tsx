import React, { PureComponent } from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';
import Icon from '@rc-x/icon';

import { IProps as IPasswordProps } from './password';
import './style.scss';

const baseCls = getPrefixCls('input');

export type IInputSize = 'default' | 'large' | 'small';

export interface IProps {
  /** ID */
  id?: string;
  /** 字段 */
  name?: string;
  /** 自定义样式 */
  className?: string;
  /** 默认值 */
  defaultValue?: string;
  /** 当前值 */
  value?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /**
   * 大小
   * @default default
   */
  size?: IInputSize;
  /** 前缀图标 */
  prefix?: string | React.ReactNode;
  /** 后缀图标 */
  suffix?: string | React.ReactNode;
  /** 允许清除 */
  allowClear?: boolean;
  onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** 变更回调 */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** 回车键回调 */
  onPressEnter?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** 前置内容 */
  addonBefore?: React.ReactNode;
  /** 后置内容 */
  addonAfter?: React.ReactNode;
  /** HTML类型 */
  htmlType?: string;
}

export interface IState {
  value: string;
}

export default class Input extends PureComponent<IProps, IState> {
  static Password: React.FunctionComponent<IPasswordProps>;

  static defaultProps: IProps = {
    size: 'default',
    htmlType: 'text'
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      value: props.value || props.defaultValue || ''
    };
  }

  static getDerivedStateFromProps(props: IProps, state) {
    if (props.value !== undefined && props.value !== state.value) {
      return Object.assign({}, state, {
        value: props.value
      });
    }

    return state;
  }

  handleChange = e => {
    const { onChange } = this.props;

    onChange && onChange(e);
    this.setState({ value: e.target.value });
  };

  handleClear = e => {
    const { onChange } = this.props;
    onChange && onChange(e);
    this.setState({ value: '' });
  };

  renderInput = () => {
    const { id, name, className, htmlType, size, disabled } = this.props;
    const { value } = this.state;

    return (
      <input
        id={id}
        name={name}
        className={classNames(baseCls, className, `${baseCls}-${size}`, {
          [`${baseCls}-disabled`]: disabled
        })}
        type={htmlType}
        value={value}
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
      addonBefore,
      addonAfter,
      allowClear,
      size
    } = this.props;

    if (prefix || suffix || addonBefore || addonAfter || allowClear) {
      const wrapperCls = getPrefixCls('wrapper', baseCls);
      const innerCls = getPrefixCls('inner', baseCls);

      return (
        <div
          className={classNames(wrapperCls, `${wrapperCls}-${size}`, {
            [`${getPrefixCls('has-addon', wrapperCls)}`]:
              addonBefore || addonAfter,
            [`${getPrefixCls('has-addon-before', wrapperCls)}`]: addonBefore,
            [`${getPrefixCls('has-addon-after', wrapperCls)}`]: addonAfter
          })}
        >
          {addonBefore && this.renderAddon(addonBefore, 'before')}
          {prefix || suffix || allowClear ? (
            <div
              className={classNames(innerCls, {
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
                  {allowClear && this.state.value && (
                    <Icon
                      onClick={this.handleClear}
                      className={getPrefixCls('clear', baseCls)}
                      type="x-circle"
                    />
                  )}
                </div>
              ) : null}
            </div>
          ) : (
            this.renderInput()
          )}
          {addonAfter && this.renderAddon(addonAfter, 'after')}
        </div>
      );
    }

    return this.renderInput();
  }
}
