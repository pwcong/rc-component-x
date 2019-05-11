import React from 'react';
import { findDOMNode } from 'react-dom';
import TransitionGroup from './transition-group';

export interface IProps {
  in: boolean;
  children: React.ReactNode;
}

export interface IState {}

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
class ReplaceTransition extends React.PureComponent<IProps, IState> {
  handleEnter = (...args) => this.handleLifecycle('onEnter', 0, args);
  handleEntering = (...args) => this.handleLifecycle('onEntering', 0, args);
  handleEntered = (...args) => this.handleLifecycle('onEntered', 0, args);

  handleExit = (...args) => this.handleLifecycle('onExit', 1, args);
  handleExiting = (...args) => this.handleLifecycle('onExiting', 1, args);
  handleExited = (...args) => this.handleLifecycle('onExited', 1, args);

  handleLifecycle(handler, idx, originalArgs) {
    const { children } = this.props;
    const child: any = React.Children.toArray(children)[idx];

    if (child.props[handler]) child.props[handler](...originalArgs);
    if (this.props[handler]) this.props[handler](findDOMNode(this));
  }

  render() {
    const { children, in: inProp, ...props } = this.props;
    const [first, second] = React.Children.toArray(children);

    return (
      <TransitionGroup {...props}>
        {inProp
          ? React.cloneElement(first as any, {
              key: 'first',
              onEnter: this.handleEnter,
              onEntering: this.handleEntering,
              onEntered: this.handleEntered
            })
          : React.cloneElement(second as any, {
              key: 'second',
              onEnter: this.handleExit,
              onEntering: this.handleExiting,
              onEntered: this.handleExited
            })}
      </TransitionGroup>
    );
  }
}

export default ReplaceTransition;
