import React from 'react';

import Icon from '@rc-x/icon';
import classNames, { getPrefixCls } from '@rc-x/utils/classnames';

import './style.scss';

export type IButtonHtmlType = 'submit' | 'reset' | 'button';
export type IButtonType =
  | 'primary'
  | 'default'
  | 'warning'
  | 'danger'
  | 'success';
export type IButtonSize = 'large' | 'default' | 'small';
export type IButtonShape = 'circle' | 'round';
export type IButtonTarget = '_blank' | '_self';

export interface IProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  htmlType?: IButtonHtmlType;
  type?: IButtonType;
  shape?: IButtonShape;
  size?: IButtonSize;
  icon?: string;
  disabled?: boolean;
  href?: string;
  target?: IButtonTarget;
  loading?: boolean;
}

const baseCls = getPrefixCls('button');

const Button: React.FunctionComponent<IProps> = (props: IProps) => {
  const {
    className,
    children,
    onClick,
    htmlType = 'button',
    type = 'default',
    shape = 'round',
    size = 'default',
    icon,
    disabled,
    href,
    target = '_self',
    loading
  } = props;

  return (
    <button
      className={classNames(
        baseCls,
        className,
        getPrefixCls(size, baseCls),
        getPrefixCls(shape, baseCls),
        getPrefixCls(type, baseCls),
        {
          [`${getPrefixCls('disabled', baseCls)}`]: disabled,
          [`${getPrefixCls('loading', baseCls)}`]: loading
        }
      )}
      onClick={
        loading || disabled
          ? undefined
          : href
          ? () => {
              window.open(href, target);
            }
          : onClick
      }
      type={htmlType}
    >
      {(icon || loading) && (
        <Icon type={icon || (loading ? 'loader' : '')} spin={loading} />
      )}
      {children}
    </button>
  );
};

Button.defaultProps = {
  htmlType: 'button',
  size: 'default',
  shape: 'round',
  type: 'default',
  target: '_self'
};

export default Button;
