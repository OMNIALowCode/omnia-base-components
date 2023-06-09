import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { baseUrl, getAttributeValue, isNullOrEmpty } from '../helpers';

const emptyImage =
  'data:image/png;base64,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';

class Image extends HTMLImageElement {
  private omniaUrl?: string;
  private token?: string;
  private tenant?: string;
  private environment?: string;
  constructor() {
    super();
    this.omniaUrl = undefined;
    this.token = undefined;
    this.tenant = undefined;
    this.environment = undefined;

    this.loadOmniaImage = this.loadOmniaImage.bind(this);
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
    const src = getAttributeValue(renderProps.attributes, 'source', null);

    const title = getAttributeValue(renderProps.attributes, 'title', null) ?? undefined;
    const url = getAttributeValue(renderProps.attributes, 'omniaUrl', null) ?? undefined;

    const token = renderProps?.authentication?.token ?? '';
    const tenant = renderProps?.tenant?.code ?? '';
    const environment = renderProps?.tenant?.environment ?? '';

    if (url) {
      if (renderProps.isEdit) this.src = emptyImage;
      else if (
        url != this.omniaUrl ||
        token != this.token ||
        tenant != this.tenant ||
        environment != this.environment
      ) {
        this.omniaUrl = url;
        this.token = token;
        this.tenant = tenant;
        this.environment = environment;
        this.loadOmniaImage();
      }
    } else this.src = isNullOrEmpty(src) ? emptyImage : src;

    if (title) {
      this.title = title;
      this.alt = title;
    }
  }

  loadOmniaImage() {
    const url = `${baseUrl}${this.tenant}/${this.environment}/application/${this.omniaUrl}`;
    const _this = this;

    fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${this.token}`,
      }),
    })
      .then(response => {
        if (response.ok) return response.blob();
        throw new Error(response.statusText);
      })
      .then(blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = ev => (_this.src = (ev.target?.result as string) ?? emptyImage);
      })
      .catch((error: any) => {
        this.src = emptyImage;
        console.error(error);
      });
  }
}

export default Image;
