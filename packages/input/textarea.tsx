import React, { PureComponent } from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import { IBaseProps } from './types';

import './style.scss';

export type ITextareaCounter = (value: string) => React.ReactNode;

export interface IProps extends IBaseProps {
  /** 计数器 */
  counter?: boolean | ITextareaCounter;
  /** 限制长度 */
  limit?: number;
}

export interface IForwardRefProps extends IProps {
  forwardedRef?: React.Ref<any>;
}

export interface IState {
  value: string;
}

const baseCls = getPrefixCls('textarea');

class Textarea extends PureComponent<IForwardRefProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value: props.defaultValue || ''
    };
  }

  getComputedStyle = () => {
    const tmpTextarea = document.createElement('textarea');
    tmpTextarea.className = baseCls;
    tmpTextarea.style.display = 'none';
    document.body.appendChild(tmpTextarea);
    const style = Object.assign({}, window.getComputedStyle(tmpTextarea));
    document.body.removeChild(tmpTextarea);
    return style;
  };

  componentDidMount() {
    // TODO 计算样式
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

  static getDerivedStateFromProps(props: IProps, state) {
    if (props.value !== undefined && props.value !== state.value) {
      return Object.assign({}, state, {
        value: props.value
      });
    }

    return state;
  }

  renderTextarea = () => {
    const { id, name, className, disabled, forwardedRef } = this.props;
    const { value } = this.state;
    return (
      <textarea
        id={id}
        name={name}
        ref={forwardedRef}
        className={classNames(baseCls, className, {
          [`${baseCls}-disabled`]: disabled
        })}
        value={value}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    return this.renderTextarea();
  }
}

export default React.forwardRef<any, IProps>((props, ref) => {
  return <Textarea {...props} forwardedRef={ref} />;
});
