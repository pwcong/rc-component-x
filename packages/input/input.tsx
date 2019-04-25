import React, { PureComponent } from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

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
  prefix?: React.ReactNode;
  /** 后缀图标 */
  suffix?: React.ReactNode;
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

export default class Input extends PureComponent<IProps> {
  render() {
    return <div className={classNames(baseCls)} />;
  }
}
