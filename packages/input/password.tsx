import React, { useState } from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';
import Input, { IProps as IInputProps } from './input';

import './style.scss';

const baseCls = getPrefixCls('input-number');

export interface IProps extends IInputProps {
  defaultVisibled?: boolean;
}

export interface IForwardRefProps extends IProps {
  forwardedRef?: React.Ref<any>;
}

const Password: React.FunctionComponent<IForwardRefProps> = props => {
  const { defaultVisibled = true, className, forwardedRef } = props;

  const [visibled, setVisibled] = useState(defaultVisibled);

  return (
    <Input
      {...props}
      ref={forwardedRef}
      className={classNames(baseCls, className)}
      htmlType={visibled ? 'text' : 'password'}
      suffix={
        <Icon
          className={getPrefixCls('toggle', baseCls)}
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

export default React.forwardRef<any, IProps>((props, ref) => {
  return <Password {...props} forwardedRef={ref} />;
});
