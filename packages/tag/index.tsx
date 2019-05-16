import React, { useState } from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('tag');

export type ITagType = 'default' | 'primary' | 'success' | 'warning' | 'errpr';
export type ITagShape = 'default' | 'square' | 'round';

export interface ITagProps {
  /** 类名 */
  className?: string;
  /** 类型 */
  type?: ITagType;
  /** 形状 */
  shape?: ITagShape;
  /** 允许关闭 */
  closable?: boolean;
  /** 关闭回调 */
  onClose?: () => void;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 是否显示 */
  visible?: boolean;
}

const Tag: React.FunctionComponent<ITagProps> = props => {
  const {
    className,
    closable,
    type = 'default',
    shape = 'default',
    onClose,
    style,
    visible: customVisible,
    children
  } = props;

  const [stateVisible, setVisible] = useState(true);

  const visible = customVisible !== undefined ? customVisible : stateVisible;

  return (
    <div
      className={classNames(baseCls, className, {
        [`${getPrefixCls('hidden', baseCls)}`]: !visible,
        [`${getPrefixCls(type, baseCls)}`]: type,
        [`${getPrefixCls(shape, baseCls)}`]: shape
      })}
      style={style}
    >
      {children && (
        <span className={getPrefixCls('children', baseCls)}>{children}</span>
      )}

      {closable && (
        <span className={getPrefixCls('close', baseCls)}>
          <Icon
            type="x"
            onClick={() => {
              setVisible(false);
              onClose && onClose();
            }}
          />
        </span>
      )}
    </div>
  );
};

Tag.defaultProps = {
  type: 'default',
  shape: 'default'
};

export default Tag;
