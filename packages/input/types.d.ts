export interface IBaseProps {
  /** ID */
  id?: string;
  /** 字段 */
  name?: string;
  /** 自定义类名 */
  className?: string;
  /** 外容器类名 */
  wrapperClassName?: string;
  /** 内容器类名 */
  innerClassName?: string;
  /** 默认值 */
  defaultValue?: any;
  /** 当前值 */
  value?: any;
  /** 是否禁用 */
  disabled?: boolean;
  /** 变更回调 */
  onChange?: (value: any) => void;
}
