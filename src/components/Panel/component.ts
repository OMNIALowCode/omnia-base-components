import { ExternalElementNodePropsType } from 'omnia-component-framework';

class Panel extends HTMLDivElement {
  constructor() {
    super();
  }
  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
  }
}

export default Panel;
