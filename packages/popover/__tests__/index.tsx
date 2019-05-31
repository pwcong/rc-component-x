import React from 'react'
import Test from '@rc-x/test'

import Popover from '../index'
import packageJson from '../package.json'

export default function() {
  return (
    <Test
      component={Popover}
      componentProps={{
        content: <div style={{ padding: '8px' }}>Popover</div>,
        children: (
          <div
            className="children"
            style={{
              position: 'relative',
              left: '100px',
              lineHeight: '50px',
              textAlign: 'center',
              display: 'inline-block',
              border: '1px solid #ccc',
              width: 200,
              height: 50
            }}
          >
            Here!
          </div>
        )
      }}
      componentTestProps={{
        defaultVisible: {
          type: 'switch',
          value: true,
          label: '默认显示状态'
        },
        showDelay: {
          type: 'inputNumber',
          value: 0,
          label: '显示延迟'
        },
        hideDelay: {
          type: 'inputNumber',
          value: 0,
          label: '掩藏延迟'
        },
        placement: {
          type: 'radio',
          value: 'top',
          label: '位置',
          options: [
            { label: 'top', value: 'top' },
            { label: 'topLeft', value: 'topLeft' },
            { label: 'topRight', value: 'topRight' },
            { label: 'bottom', value: 'bottom' },
            { label: 'bottomLeft', value: 'bottomLeft' },
            { label: 'bottomRight', value: 'bottomRight' },
            { label: 'left', value: 'left' },
            { label: 'leftTop', value: 'leftTop' },
            { label: 'leftBottom', value: 'leftBottom' },
            { label: 'right', value: 'right' },
            { label: 'rightTop', value: 'rightTop' },
            { label: 'rightBottom', value: 'rightBottom' }
          ]
        },
        trigger: {
          type: 'radio',
          value: 'hover',
          label: '响应类型',
          options: [
            { label: 'hover', value: 'hover' },
            { label: 'click', value: 'click' }
          ]
        }
      }}
      componentPackageJson={packageJson}
    />
  )
}
