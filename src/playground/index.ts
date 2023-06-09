import { ComponentsPackage, IRegisterComponentPackage, Playground } from 'omnia-component-framework';

import Factory from '../index';

const getComponentPackage = () => {
  const f: IRegisterComponentPackage = new Factory();
  const componentPackage: ComponentsPackage = f.register();
  return componentPackage;
};

const startPlayground = async (componentPackage: ComponentsPackage) => {
  const playgroundInstance = await Playground.createNew(componentPackage);

  const elementName = 'Text';

  const componentElement = playgroundInstance.renderElement(elementName);

  componentElement?.setRenderProps({
    attributes: {
      value: "This is omnia's awesome text component!",
    },
    isEdit: false,
    elementName: elementName,
    className: '',
    onExecuteEvent: (event: string, parameters: any[]) => console.log('onExecuteEvent', event, parameters),
    onUpdateBinding: (attributeKey: string, newValue: any) => console.log('onExecuteEvent', attributeKey, newValue),
    onUpdateBindingArray: (
      newValues: {
        key: string;
        value: any;
      }[],
    ) => console.log('onUpdateBindingArray', newValues),
    onUpdateBindingArrayAndExecuteEvent: (
      newValues: {
        key: string;
        value: any;
      }[],
      event: {
        name: string;
        parameters: any[];
      },
    ) => console.log('onUpdateBindingArrayAndExecuteEvent', newValues, event),
    implementedEvents: [],
    tenant: {
      code: 'Employee',
      environment: 'PRD',
    },
    authentication: {
      token: '',
    },
  });
};

const start = () => {
  const componentPackage = getComponentPackage();
  startPlayground(componentPackage);
};

start();

export { };

