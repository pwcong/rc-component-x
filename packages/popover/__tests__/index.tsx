import React from 'react';
import Test from '@rc-x/test';

import Popover from '../index';
import packageJson from '../package.json';

export default function() {
  return (
    <Test
      component={Popover}
      componentProps={{
        content: <div>Popover</div>,
        children: (
          <div
            className="children"
            style={{
              position: 'relative',
              left: '50px',
              display: 'inline-block',
              border: '1px solid #ccc',
              width: 200,
              height: 50
            }}
          >
            Hello World!
          </div>
        )
      }}
      componentTestProps={{
        defaultVisible: {
          type: 'switch',
          value: true,
          label: '默认显示状态'
        }
      }}
      componentPackageJson={packageJson}
    />
  );
}
