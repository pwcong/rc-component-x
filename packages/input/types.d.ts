export interface IBaseProps {
  /** ID */
  id?: string;
  /** 字段 */
  name?: string;
  /** 自定义样式 */
  className?: string;
  /** 默认值 */
  defaultValue?: string;
  /** 当前值 */
  value?: string;
  /** 是否禁用 */
  disabled?: boolean;
}
