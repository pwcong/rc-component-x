import React, { useState } from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';
import Input, { IProps as IInputProps } from './input';

import './style.scss';

const baseCls = getPrefixCls('input-search');

export interface IProps extends IInputProps {
  onSearch?: (value: string) => void;
}

const Search: React.FunctionComponent<IProps> = props => {
  const {
    className,
    onChange,
    onSearch,
    onPressEnter,
    defaultValue,
    value: customValue
  } = props;

  const [value, setValue] = useState(defaultValue || '');

  return (
    <Input
      {...props}
      className={classNames(baseCls, className)}
      onChange={e => {
        setValue(e.target.value);
        onChange && onChange(e);
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

export default Search;
