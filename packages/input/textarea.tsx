import React, { PureComponent } from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import { IBaseProps } from './types';

import './style.scss';

export interface IProps extends IBaseProps {}

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
    const { id, name, className, forwardedRef, disabled } = this.props;
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
