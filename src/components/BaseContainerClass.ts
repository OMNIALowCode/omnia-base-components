import { ExternalElementNodePropsType } from 'omnia-component-framework';

class BaseContainerClass extends HTMLElement {
  constructor(tag: string) {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });
    this._tag = tag;
  }

  private _tag: string;
  private _shadow: ShadowRoot;
  private _renderProps?: ExternalElementNodePropsType;

  connectedCallback() {
    this.doRender();
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this._renderProps = renderProps;
    this.doRender();
  }

  doRender() {
    if (!this._renderProps) return;
    const style = this._renderProps.style;
    const className = this._renderProps.className;

    const tag = document.createElement(this._tag);
    tag.className = className;
    tag.appendChild(document.createElement('slot'));
    Object.assign(tag.style, style);

    this._shadow.innerHTML = '';
    this._shadow.appendChild(tag);
  }
}

export default BaseContainerClass;
