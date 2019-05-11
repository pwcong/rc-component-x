import React, { PureComponent } from 'react';

import Icon from '@rc-x/icon';
import { classNames, getPrefixCls, warning } from '@rc-x/utils';

import { IBaseProps } from './types';
import { getTextareaComputedState } from './utils';

import './style.scss';

export type ITextareaCounter = (
  value: string,
  limit?: number
) => React.ReactNode;

export type ITextareaRowLimit = {
  /** 最小行数 */
  min?: number;
  /** 最大行数 */
  max?: number;
};

export interface ITextareaProps extends IBaseProps {
  /** 计数器 */
  counter?: boolean | ITextareaCounter;
  /** 限制长度 */
  limit?: number;
  /** 行数设置 */
  row?: number | Textarea;
  /** 允许清除 */
  allowClear?: boolean;
}

interface IForwardRefProps extends ITextareaProps {
  forwardedRef?: React.Ref<any>;
}

interface IState {
  value: string;
  row: number;
  minRow: number;
  maxRow: number;
  rowHeight: number;
  rowOuterHeight: number;
  rowBorderHeight: number;
  rowPaddingHeight: number;
  height: number;
}

const baseCls = getPrefixCls('textarea');

class Textarea extends PureComponent<IForwardRefProps, IState> {
  private ref = React.createRef();

  constructor(props: IForwardRefProps) {
    super(props);

    const { row: customRow } = props;

    let row = 3;
    let minRow = -1;
    let maxRow = -1;
    if (customRow !== undefined) {
      if (typeof customRow === 'number') {
        row = customRow;
      } else {
        const { min = -1, max = -1 } = customRow as ITextareaRowLimit;

        minRow = min > 0 ? min : -1;
        maxRow = max > 0 ? max : -1;

        row = minRow;

        warning(
          minRow < 0,
          'Textarea',
          'defaultRow has been set to be 1 because minRow without custom setting',
          () => {
            row = 1;
          }
        );

        warning(
          maxRow < minRow,
          'Textarea',
          'maxRow should not be smaller than minRow',
          () => {
            maxRow = minRow;
          }
        );
      }
    }

    const defaultRowHeight = 14 * 1.2;
    const defaultRowBorderHeight = 1 + 1;
    const defaultRowPaddingHeight = 6 + 6;

    this.state = {
      value: props.defaultValue || '',
      row,
      minRow,
      maxRow,
      rowHeight: defaultRowHeight,
      rowBorderHeight: defaultRowBorderHeight,
      rowPaddingHeight: defaultRowPaddingHeight,
      rowOuterHeight: defaultRowBorderHeight + defaultRowPaddingHeight,
      height:
        row * defaultRowHeight + defaultRowBorderHeight + defaultRowBorderHeight
    };
  }

  getRef = () => {
    return this.props.forwardedRef || this.ref;
  };

  getComputedStyle = (): CSSStyleDeclaration => {
    const ref = this.getRef() as React.RefObject<any>;
    if (ref && ref.current) {
      return window.getComputedStyle(ref.current) || {};
    }

    return {} as CSSStyleDeclaration;
  };

  handleChange = e => {
    const { onChange } = this.props;
    this.setState({ value: e.target.value }, () => {
      onChange && onChange(e.target.value);
    });
  };

  handleClear = e => {
    const { onChange } = this.props;
    this.setState({ value: '' }, () => {
      onChange && onChange('');
    });
  };

  renderTextarea = () => {
    const { id, name, className, disabled, limit } = this.props;
    const {
      value,
      rowHeight,
      rowOuterHeight,
      minRow,
      maxRow,
      height
    } = this.state;

    return (
      <textarea
        id={id}
        name={name}
        ref={this.getRef()}
        className={classNames(baseCls, className, {
          [`${baseCls}-disabled`]: disabled,
          [`${baseCls}-overflow`]: limit !== undefined && value.length > limit
        })}
        value={value}
        style={{
          height,
          minHeight: minRow > 0 ? minRow * rowHeight + rowOuterHeight : 'unset',
          maxHeight: maxRow > 0 ? maxRow * rowHeight + rowOuterHeight : 'unset'
        }}
        onChange={this.handleChange}
      />
    );
  };

  renderClear = () => {
    const { allowClear } = this.props;
    const { value } = this.state;

    if (!allowClear) {
      return null;
    }

    return value.length > 0 ? (
      <div className={getPrefixCls('clear', baseCls)}>
        <Icon type="x-circle" onClick={this.handleClear} />
      </div>
    ) : null;
  };

  renderCounter = () => {
    const { counter, limit } = this.props;
    const { value } = this.state;

    const cls = getPrefixCls('counter', baseCls);

    if (counter !== undefined) {
      if (typeof counter === 'boolean') {
        if (counter) {
          return (
            <div className={cls}>
              <span>{value.length}</span>
              {limit !== undefined &&
                limit >= 0 && [
                  <span key={`${cls}-sep`}>/</span>,
                  <span key={`${cls}-limit`}>{limit}</span>
                ]}
            </div>
          );
        }
      } else {
        return <div className={cls}>{counter(value, limit)}</div>;
      }
    }

    return null;
  };

  componentDidMount() {
    const style = this.getComputedStyle();

    const {
      rowHeight,
      rowOuterHeight,
      rowBorderHeight,
      rowPaddingHeight
    } = getTextareaComputedState(style);
    this.setState(({ row }) => ({
      rowHeight,
      rowOuterHeight,
      rowBorderHeight,
      rowPaddingHeight,
      height: row * rowHeight + rowOuterHeight
    }));
  }

  componentDidUpdate() {
    const { height } = this.state;
    const ref = this.getRef() as React.RefObject<any>;
    if (ref && ref.current) {
      const _height = ref.current.scrollHeight;
      if (_height > height) {
        this.setState(({ rowHeight }) => ({
          height: _height + rowHeight * 3
        }));
      }
    }
  }

  static getDerivedStateFromProps(props: IForwardRefProps, state) {
    if (props.value !== undefined && props.value !== state.value) {
      return Object.assign({}, state, {
        value: props.value
      });
    }

    return state;
  }

  render() {
    const { allowClear, counter } = this.props;

    return allowClear || counter ? (
      <div className={getPrefixCls('wrapper', baseCls)}>
        <div className={getPrefixCls('inner', baseCls)}>
          {this.renderTextarea()}
          {this.renderCounter()}
          {this.renderClear()}
        </div>
      </div>
    ) : (
      this.renderTextarea()
    );
  }
}

export default React.forwardRef<any, ITextareaProps>((props, ref) => {
  return <Textarea {...props} forwardedRef={ref} />;
});
