import React, { useState } from 'react';

import { classNames, getPrefixCls } from '@rc-x/utils';

import './style.scss';

const baseCls = getPrefixCls('test');

export type IComponentPropType =
  | 'radio'
  | 'switch'
  | 'checkbox'
  | 'input'
  | 'inputNumber';

export interface IComponentBaseProp {
  type: IComponentPropType;
  label: string;
  value: any;
}

export interface IComponentInputProp extends IComponentBaseProp {
  type: 'input';
  value: string;
}

export interface IComponentInputNumberProp extends IComponentBaseProp {
  type: 'inputNumber';
  value: number;
}

export interface IComponentSwitchProp extends IComponentBaseProp {
  type: 'switch';
  value: boolean;
}

export interface IComponentRadioProp extends IComponentBaseProp {
  type: 'radio';
  options: { label: string; value: any }[];
}

export interface IComponentCheckboxProp extends IComponentBaseProp {
  type: 'checkbox';
  value: Array<any>;
  options: { label: string; value: any }[];
}

export type IComponentProp =
  | IComponentRadioProp
  | IComponentCheckboxProp
  | IComponentInputProp
  | IComponentInputNumberProp
  | IComponentSwitchProp;

export interface IProps {
  component: any;
  componentProps?: { [name: string]: any };
  componentTestProps: { [name: string]: IComponentProp };
  componentPackageJson: { [name: string]: any };
  children?: React.ReactNode;
}

const Test = (props: IProps) => {
  const {
    component,
    componentProps,
    componentTestProps,
    componentPackageJson,
    children
  } = props;

  const controllers = Object.keys(componentTestProps).map(k => {
    const prop = componentTestProps[k];
    const [value, setValue] = useState(prop.value);
    return {
      name: k,
      value,
      setValue
    };
  });

  const _componentTestProps = {};
  controllers.forEach(c => (_componentTestProps[c.name] = c.value));

  return (
    <div className={classNames(baseCls)}>
      <div className={getPrefixCls('package', baseCls)}>
        <div className={getPrefixCls('title', baseCls)}>Package</div>
        <table>
          <tbody>
            <tr>
              <td>name:</td>
              <td>{componentPackageJson.name}</td>
            </tr>
            <tr>
              <td>description:</td>
              <td>{componentPackageJson.description}</td>
            </tr>
            <tr>
              <td>version:</td>
              <td>{componentPackageJson.version}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={getPrefixCls('props', baseCls)}>
        <div className={getPrefixCls('title', baseCls)}>Props</div>
        {controllers.map((c, index) => {
          const componentProp = componentTestProps[c.name];

          if (!componentProp) {
            return null;
          }

          const propCls = getPrefixCls('prop', baseCls);

          let controller: React.ReactNode;
          switch (componentProp.type) {
            case 'input':
              controller = (
                <input
                  value={c.value}
                  type="text"
                  onChange={e => {
                    c.setValue(e.target.value);
                  }}
                />
              );
              break;
            case 'inputNumber':
              controller = (
                <input
                  type="number"
                  value={c.value}
                  onChange={e => {
                    c.setValue(Number(e.target.value));
                  }}
                />
              );
              break;
            case 'radio':
              const radioGroupCls = getPrefixCls('radio-group', propCls);
              controller = (
                <div className={radioGroupCls}>
                  {componentProp.options.map((o, _index) => (
                    <label key={`${radioGroupCls}-${_index}`}>
                      <input
                        name={c.name}
                        value={o.value}
                        type="radio"
                        checked={o.value === c.value}
                        onChange={e => c.setValue(e.target.value)}
                      />
                      {o.label}
                    </label>
                  ))}
                </div>
              );
              break;
            case 'switch':
              const switchGroupCls = getPrefixCls('switch-group', propCls);
              const switchOptions = ['true', 'false'];
              controller = (
                <div className={switchGroupCls}>
                  {switchOptions.map((o, _index) => (
                    <label key={`${switchGroupCls}-${_index}`}>
                      <input
                        name={c.name}
                        value={o}
                        type="radio"
                        checked={c.value.toString() === o}
                        onChange={e => {
                          c.setValue(e.target.value === 'true');
                        }}
                      />
                      {o}
                    </label>
                  ))}
                </div>
              );
              break;
            case 'checkbox':
              const checkboxGroupCls = getPrefixCls('checkbox-group', propCls);
              controller = (
                <div className={checkboxGroupCls}>
                  {componentProp.options.map((o, _index) => (
                    <label key={`${checkboxGroupCls}-${_index}`}>
                      <input
                        name={c.name}
                        value={o.value}
                        type="checkbox"
                        checked={c.value.indexOf(o.value) > -1}
                        onChange={e => {
                          const newValue: Array<any> = [];
                          const valueIndex = c.value.indexOf(e.target.value);
                          if (valueIndex < 0) {
                            newValue.push(e.target.value);
                          }
                          c.value.forEach((v, __index) => {
                            if (valueIndex > -1 && __index === valueIndex) {
                              return;
                            }
                            newValue.push(v);
                          });
                          c.setValue(newValue);
                        }}
                      />
                      {o.label}
                    </label>
                  ))}
                </div>
              );
              break;
            default:
              break;
          }

          return (
            <div className={propCls} key={`${propCls}-${index}`}>
              <div className={getPrefixCls('label', propCls)}>
                {`${componentProp.label} (${c.name}) :`}
              </div>

              <div className={getPrefixCls('controller')}>{controller}</div>
            </div>
          );
        })}
      </div>
      <div className={getPrefixCls('component', baseCls)}>
        <div className={getPrefixCls('title', baseCls)}>Component</div>
        {React.createElement(component, {
          ...(componentProps || {}),
          ..._componentTestProps
        })}
        {children && (
          <div className={getPrefixCls('children', baseCls)}>{children}</div>
        )}
      </div>
    </div>
  );
};

export default Test;
