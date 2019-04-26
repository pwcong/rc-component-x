import React, { useState } from 'react';

import Icon from '@rc-x/icon';
import Input, { IProps as IInputProps } from './input';

export interface IProps extends IInputProps {
  defaultVisibled?: boolean;
}

const Password: React.FunctionComponent<IProps> = props => {
  const { defaultVisibled = true } = props;

  const [visibled, setVisibled] = useState(defaultVisibled);

  return (
    <Input
      {...props}
      htmlType={visibled ? 'text' : 'password'}
      suffix={
        <Icon
          type={visibled ? 'eye' : 'eye-off'}
          onClick={() => {
            setVisibled(!visibled);
          }}
        />
      }
    />
  );
};

Password.defaultProps = {
  defaultVisibled: true
};

export default Password;
