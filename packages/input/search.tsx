import React, { useState } from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';
import Input, { IInputProps } from './input';

import './style.scss';

const baseCls = getPrefixCls('input-search');

export interface ISearchProps extends IInputProps {
  /** 搜索回调 */
  onSearch?: (value: string) => void;
}
interface IForwardRefProps extends ISearchProps {
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
      value={customValue || value}
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

export default React.forwardRef<any, ISearchProps>((props, ref) => {
  return <Search {...props} forwardedRef={ref} />;
});
