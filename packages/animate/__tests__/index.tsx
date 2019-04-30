import React, { useState } from 'react';
import Test from '@rc-x/test';

import animate from '../index';

import packageJson from '../package.json';

const { Transition } = animate.transition;
const { Motion, spring } = animate.motion;

export default function() {
  const [isIn, setIsIn] = useState(true);
  const [show, setShow] = useState(true);

  return (
    <Test
      component={[]}
      componentProps={[]}
      componentTestProps={[]}
      componentName={[]}
      componentPackageJson={packageJson}
    >
      <fieldset style={{ padding: 8 }}>
        <legend>Transition</legend>
        <div>
          <button
            onClick={() => {
              setIsIn(!isIn);
            }}
          >
            {isIn ? 'true' : 'false'}
          </button>
        </div>
        <div>
          <Transition in={isIn} timeout={200}>
            {state => (
              <p
                className="transition"
                style={{
                  transition: 'all 0.2s',
                  ...{
                    entering: { opacity: 1 },
                    entered: { opacity: 1 },
                    exiting: { opacity: 0 },
                    exited: { opacity: 0 }
                  }[state]
                }}
              >
                Hello World!
              </p>
            )}
          </Transition>
        </div>
      </fieldset>
      <fieldset style={{ padding: 8 }}>
        <legend>Motion</legend>
        <div>
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? 'true' : 'false'}
          </button>
        </div>
        <div>
          <Motion style={{ opacity: spring(show ? 1 : 0) }}>
            {style => (
              <p className="transition" style={style}>
                Hello World!
              </p>
            )}
          </Motion>
        </div>
      </fieldset>
    </Test>
  );
}
