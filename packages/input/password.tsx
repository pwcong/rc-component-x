import React, { useState } from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';
import Input, { IInputProps } from './input';

import './style.scss';

const baseCls = getPrefixCls('input-number');

export interface IPasswordProps extends IInputProps {
  /** 默认可见 */
  defaultVisibled?: boolean;
}

interface IForwardRefProps extends IPasswordProps {
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

export default React.forwardRef<any, IPasswordProps>((props, ref) => {
  return <Password {...props} forwardedRef={ref} />;
});
