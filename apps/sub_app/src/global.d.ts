interface Window {
  $wujie: IWujie;
}

type IWujie = {
  bus: EventBus;
  shadowRoot?: ShadowRoot;
  props?: { [key: string]: any };
  location?: Object;
};

declare module 'styled-components'

// declare var $wujie: IWujie;
