import React from 'react';
import RcxInput, { IProps } from './input';

import Password from './password';
import Search from './search';
import Textarea from './textarea';

const Input: React.FunctionComponent<IProps> & {
  Password: typeof Password;
  Search: typeof Search;
  Textarea: typeof Textarea;
} = props => {
  return <RcxInput {...props} />;
};

Input.Password = Password;
Input.Search = Search;
Input.Textarea = Textarea;

export default Input;
