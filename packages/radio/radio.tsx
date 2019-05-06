import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('radio');

export type IRadioChangeListener = (checked: boolean) => void;

export interface IProps {
  /** 类名 */
  className?: string;
  /** 选中状态 */
  checked?: boolean;
  /** 默认选中状态 */
  defaultChecked?: boolean;
  /** 字段名 */
  name?: string;
  /** 选中值 */
  value?: any;
  onChange?: IRadioChangeListener;
}

export interface IState {
  checked: boolean;
}

export default class Radio extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const { defaultChecked = false } = props;

    this.state = {
      checked: defaultChecked
    };
  }

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    const { checked } = nextProps;

    if (checked !== undefined) {
      return Object.assign({}, prevState, {
        checked
      });
    }

    return prevState;
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
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
    const { className, value, children, checked } = this.props;

    return (
      <label
        className={classNames(getPrefixCls('wrapper', baseCls), className)}
      >
        <span className={baseCls}>
          <input
            type="radio"
            name={name}
            checked={checked !== undefined ? checked : this.state.checked}
            value={value}
            onChange={this.handleChange}
          />
        </span>
        <span>{children}</span>
      </label>
    );
  }
}
