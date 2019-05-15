import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('rate');

export interface IRateProps {
  className?: string;
  allowClear?: boolean;
  allowHalf?: boolean;
  character?: string;
  count?: number;
  value?: number;
  defaultValue?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
  onChange?: (value: number) => void;
}

export interface IState {
  value: number;
}

export default class Rate extends React.PureComponent<IRateProps, IState> {
  static defaultProps: IRateProps = {
    character: '⭐',
    count: 5
  };

  constructor(props: IRateProps) {
    super(props);

    this.state = {
      value: props.defaultValue !== undefined ? props.defaultValue : 0
    };
  }

  render() {
    return <div className={classNames(baseCls)} />;
  }
}
