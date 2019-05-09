export interface IBaseProps {
  /** 类名 */
  className?: string;
  /** 选中状态 */
  checked?: boolean;
  /** 默认选中状态 */
  defaultChecked?: boolean;
  /** 字段名 */
  name?: string;
  /** 选中值 */
  value?: any;
  /** 选中回调 */
  onCheck?: (checked: boolean) => void;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 子内容 */
  children?: React.ReactNode;
}
