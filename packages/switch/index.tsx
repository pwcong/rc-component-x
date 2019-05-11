import React from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('switch');

export type ISwitchSize = 'default' | 'large' | 'small';

export interface ISwitchProps {
  /** 类名 */
  className?: string;
  /** 选中状态 */
  checked?: boolean;
  /** 默认选中状态 */
  defaultChecked?: boolean;
  /** 字段名 */
  name?: string;
  /** 字段值 */
  value?: any;
  /** 选中回调 */
  onChange?: (checked: boolean) => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 加载中 */
  loading?: boolean;
  /** 尺寸 */
  size?: ISwitchSize;
  /** 选中内容 */
  checkedChildren?: React.ReactNode;
  /** 未选中内容 */
  unCheckedChildren?: React.ReactNode;
}

interface IState {
  checked: boolean;
}

export default class Switch extends React.PureComponent<ISwitchProps, IState> {
  constructor(props: ISwitchProps) {
    super(props);
    const { defaultChecked } = props;
    this.state = {
      checked: defaultChecked !== undefined ? defaultChecked : false
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { disabled, loading, onChange } = this.props;

    if (disabled || loading) {
      return;
    }

    const checked = event.target.checked;
    this.setState(
      {
        checked
      },
      () => {
        onChange && onChange(checked);
      }
    );
  };

  render() {
    const {
      className,
      name,
      value,
      checked: customChecked,
      size,
      loading,
      disabled,
      checkedChildren,
      unCheckedChildren
    } = this.props;
    const { checked } = this.state;

    return (
      <label
        className={classNames(baseCls, className, {
          [`${baseCls}-${size}`]: size,
          [`${baseCls}-loading`]: loading,
          [`${baseCls}-disabled`]: disabled,
          [`${baseCls}-checked`]:
            customChecked !== undefined ? customChecked : checked
        })}
      >
        <span className={getPrefixCls('input', baseCls)}>
          <input
            type="checkbox"
            name={name}
            value={value}
            checked={customChecked !== undefined ? customChecked : checked}
            onChange={this.handleChange}
          />
        </span>
        <span className={getPrefixCls('button', baseCls)}>
          <span className={getPrefixCls('dot', baseCls)}>
            {loading && <Icon type="loader" spin={true} />}
          </span>
          <span className={getPrefixCls('children-checked', baseCls)}>
            {checkedChildren}
          </span>
          <span className={getPrefixCls('children-unchecked', baseCls)}>
            {unCheckedChildren}
          </span>
        </span>
      </label>
    );
  }
}
