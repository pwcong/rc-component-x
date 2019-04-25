import React from 'react';

import { Motion, spring } from 'react-motion';
import { classNames, getPrefixCls } from '@rc-x/utils';

import { IBaseProps } from './types';
import { getHeight } from './utils';

export interface IProps extends IBaseProps {}

export interface IForwardRefProps extends IProps {
  forwardedRef: React.Ref<any>;
}

export interface IState {
  status: 'expand' | 'collapse' | 'idle';
  panelHeight: 0;
}

class MotionPanel extends React.PureComponent<IForwardRefProps, IState> {
  private ref: React.Ref<any> = React.createRef();

  constructor(props: IForwardRefProps) {
    super(props);

    const { expand } = props;
    this.state = {
      status: expand === undefined ? 'expand' : 'collapse',
      panelHeight: 0
    };
  }

  componentWillReceiveProps(nextProps: IProps) {
    const { expand } = nextProps;
    if (expand !== undefined) {
      const ref = this.getRef();
      expand === false && ref && ref.current && (ref.current.scrollTop = 0);
      if (this.props.expand !== nextProps.expand) {
        this.setState({
          status: 'idle'
        });
      }
    }
  }

  getRef = () => {
    return (this.props.forwardedRef as React.RefObject<any>) || this.ref;
  };

  componentDidMount() {
    const ref = this.getRef();

    ref &&
      ref.current &&
      this.setState({
        panelHeight: ref.current.scrollHeight
      });
  }

  render() {
    const {
      children,
      expand,
      maxHeight,
      minHeight,
      style: customStyle = {}
    } = this.props;
    const { status } = this.state;

    const baseCls = getPrefixCls('folder-motion-panel');

    const style = {};
    maxHeight && (style['maxHeight'] = getHeight(maxHeight) + 'px');
    minHeight && (style['minHeight'] = getHeight(minHeight) + 'px');

    const ref = this.getRef();
    let panelHeight = this.state.panelHeight;
    if (ref && ref.current && ref.current.scrollHeight !== panelHeight) {
      panelHeight = ref.current.scrollHeight;
    }
    const height = expand === false ? 0 : panelHeight;

    return (
      <Motion
        style={{
          height: spring(height, {
            stiffness: 260,
            damping: 26
          })
        }}
        onRest={() => {
          this.setState({
            status: expand ? 'expand' : 'collapse',
            panelHeight
          });
        }}
      >
        {value => (
          <div
            className={classNames(baseCls, `${baseCls}-${status}`)}
            ref={ref}
            style={Object.assign({}, customStyle, style, {
              height: value.height
            })}
          >
            {children}
          </div>
        )}
      </Motion>
    );
  }
}

export default React.forwardRef<any, IProps>((props, ref) => {
  return <MotionPanel {...props} forwardedRef={ref} />;
});
