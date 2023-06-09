import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getAttributeValue } from '../helpers';

class Link extends HTMLAnchorElement {
  constructor() {
    super();

    this.onclick = this.onClick.bind(this);
  }
  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
    const link = renderProps?.attributes['link'];
    if (link) this.href = link;
    const targert = getAttributeValue(renderProps.attributes, 'target', null);
    this.target = targert ? targert : '_self';
  }

  onClick(e) {
    if (!this.target) e.preventDefault();
  }
}

export default Link;
