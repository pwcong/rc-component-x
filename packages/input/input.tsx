import React, { PureComponent } from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';
import Icon from '@rc-x/icon';

import './style.scss';

const baseCls = getPrefixCls('input');

export type IInputSize = 'default' | 'large' | 'small';

export interface IProps {
  /** ID */
  id?: string;
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
  prefix?: string;
  /** 后缀图标 */
  suffix?: string;
  /** 允许清除 */
  allowClear?: boolean;
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

export default class Input extends PureComponent<IProps> {
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
    if (props.value !== state.value) {
      return Object.assign({}, state, {
        value: props.value
      });
    }
  }

  handleChange = e => {
    const { onChange } = this.props;

    this.setState({ value: e.target.value });
    onChange && onChange(e);
  };

  renderInput = () => {
    const { className, htmlType, size } = this.props;

    return (
      <input
        className={classNames(baseCls, className, `${baseCls}-${size}`)}
        type={htmlType}
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
    const { prefix, suffix, addonBefore, addonAfter } = this.props;

    if (prefix || suffix || addonBefore || addonAfter) {
      const wrapperCls = getPrefixCls('wrapper', baseCls);

      return (
        <div
          className={classNames(wrapperCls, {
            [`${getPrefixCls('has-prefix', wrapperCls)}`]: prefix,
            [`${getPrefixCls('has-suffix', wrapperCls)}`]: suffix
          })}
        >
          {addonBefore && this.renderAddon(addonBefore, 'before')}
          {this.renderInput()}
          {addonAfter && this.renderAddon(addonAfter, 'after')}
          {prefix && (
            <Icon type={prefix} className={getPrefixCls('prefix', baseCls)} />
          )}
          {suffix && (
            <Icon type={suffix} className={getPrefixCls('suffix', baseCls)} />
          )}
        </div>
      );
    }

    return this.renderInput();
  }
}
