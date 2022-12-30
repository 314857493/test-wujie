interface Window {
  $wujie: IWujie;
}

type IWujie = {
  bus: EventBus;
  shadowRoot?: ShadowRoot;
  props?: { [key: string]: any };
  location?: Object;
};

// declare var $wujie: IWujie;
