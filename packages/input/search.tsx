import React, { useState } from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';
import Input, { IProps as IInputProps } from './input';

import './style.scss';

const baseCls = getPrefixCls('input-search');

export interface IProps extends IInputProps {
  /** 搜索回调 */
  onSearch?: (value: string) => void;
}
export interface IForwardRefProps extends IProps {
  forwardedRef?: React.Ref<any>;
}

const Search: React.FunctionComponent<IForwardRefProps> = props => {
  const {
    className,
    onChange,
    onSearch,
    onPressEnter,
    defaultValue,
    forwardedRef,
    value: customValue
  } = props;

  const [value, setValue] = useState(defaultValue || '');

  return (
    <Input
      {...props}
      ref={forwardedRef}
      className={classNames(baseCls, className)}
      onChange={value => {
        setValue(value);
        onChange && onChange(value);
      }}
      onPressEnter={e => {
        onPressEnter && onPressEnter(e);
        onSearch && onSearch(customValue || value);
      }}
      suffix={
        <Icon
          className={getPrefixCls('enter', baseCls)}
          type="search"
          onClick={() => {
            onSearch && onSearch(customValue || value);
          }}
        />
      }
    />
  );
};

export default React.forwardRef<any, IProps>((props, ref) => {
  return <Search {...props} forwardedRef={ref} />;
});
