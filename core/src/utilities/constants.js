export const CSS_BREAKPOINTS = {
  desktopMinWidth: 600
};

export const MICROFRONTEND_TYPES = [
  { type: 'main', selector: '.iframeContainer iframe' },
  { type: 'split-view', selector: '.iframeSplitViewCnt iframe' },
  { type: 'modal', selector: '.iframeModalCtn iframe' },
  { type: 'drawer', selector: '.iframeDrawerCtn iframe' }
];

export const CUSTOM_LUIGI_CONTAINER = {
  cssSelector: '[luigi-app-root]'
};

export const APP_LOADING_INDICATOR = {
  cssSelector: '[luigi-app-loading-indicator]'
};
