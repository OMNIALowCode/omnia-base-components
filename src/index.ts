import { ComponentsPackage, IRegisterComponentPackage } from 'omnia-component-framework';
import packageInfo from '../omnia-component-package.json';
import packageJson from '../package.json';
import { ToolBoxEntries } from './ToolBoxEntries';
import * as components from './components';
import './style.css';

const allComponents = Object.values(components);

class RegisterComponents implements IRegisterComponentPackage {
  register(): ComponentsPackage {
    return {
      name: packageInfo.name,
      toolBoxEntries: ToolBoxEntries,
      version: packageJson.version,
      components: allComponents,
    };
  }
}
export default RegisterComponents;
