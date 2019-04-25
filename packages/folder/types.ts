export interface IBaseProps {
  /**
   * 状态
   * @default true
   */
  expand?: boolean;
  /** 最小高度 */
  minHeight?: number;
  /** 最大高度 */
  maxHeight?: number;
  /** 子内容 */
  children?: React.ReactNode;
  /** 自定义样式 */
  style?: React.CSSProperties;
}
