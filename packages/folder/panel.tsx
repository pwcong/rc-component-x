import React from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import { IBaseProps } from './types';
import { getHeight } from './utils';

export interface IPanelProps extends IBaseProps {}

interface IForwardRefProps extends IPanelProps {
  forwardedRef: React.Ref<any>;
}

class Panel extends React.PureComponent<IForwardRefProps> {
  private ref: React.Ref<any> = React.createRef();

  getRef = () => {
    return (this.props.forwardedRef as React.RefObject<any>) || this.ref;
  };

  render() {
    const {
      children,
      maxHeight,
      minHeight,
      expand,
      style: customStyle = {}
    } = this.props;

    const baseCls = getPrefixCls('folder-panel');

    const style = {};
    style['height'] = expand === false ? '0' : 'auto';
    maxHeight && (style['maxHeight'] = getHeight(maxHeight) + 'px');
    minHeight && (style['minHeight'] = getHeight(minHeight) + 'px');

    const ref = this.getRef();
    if (ref && ref.current) {
      expand === false && (ref.current.scrollTop = 0);
    }

    return (
      <div
        ref={ref}
        className={classNames(
          baseCls,
          `${baseCls}-${expand === false ? 'collapse' : 'expand'}`
        )}
        style={Object.assign({}, customStyle, style)}
      >
        {children}
      </div>
    );
  }
}

export default React.forwardRef<any, IPanelProps>((props, ref) => {
  return <Panel {...props} forwardedRef={ref} />;
});
