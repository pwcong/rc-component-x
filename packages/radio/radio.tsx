import React from 'react'

// import { classNames, getPrefixCls } from '@rc-x/utils'

import './style.scss'

// const baseCls = getPrefixCls('radio')

export interface IProps {
  /** 类名 */
  className?: string
  /** 选中状态 */
  checked?: boolean
  /** 默认选中状态 */
  defaultChecked?: boolean
  /** 选中值 */
  value?: any
}

const Radio: React.FunctionComponent<IProps> = props => {
  // const { className, checked, defaultChecked = false, value, children } = props;

  // return (
  //   <label className={classNames(getPrefixCls('wrapper', baseCls), className)}>
  //     <span />
  //     <span />
  //   </label>
  // );
  return <div>Hello World!</div>
}

export default Radio
