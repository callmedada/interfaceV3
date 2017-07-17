// action sheets


// alerts


// badges


// buttons

import { ComponentsPage as ButtonComponentsPage } from '../pages/buttons/components/pages';


// cards

import { AdvancedSocialPage as CardAdvancedSocialPage } from '../pages/cards/advanced-social/pages';
// import { AdvancedWeatherPage as CardAdvancedWeatherPage } from '../pages/cards/advanced-weather/pages';
import { BackgroundPage as CardBackgroundPage } from '../pages/cards/background/pages';


import { BasicPage as GridBasicPage } from '../pages/grid/basic/pages';

// icons


// inputs


// lists
import { AvatarPage as ListAvatarPage } from '../pages/lists/avatar/pages';

// loading
import { BasicPage as LoadingBasicPage } from '../pages/loading/basic/pages';

// modals


// navigation
import { BasicPage as NavigationBasicPage } from '../pages/navigation/basic/pages';

// popover


// ranges


// searchbar
import { BasicPage as SearchbarBasicPage } from '../pages/searchbars/basic/pages';

// segments


// selects


// slides


// tabs
import { IconTextPage as TabIconTextPage } from '../pages/tabs/pages';

// toast


// toggles


// toolbars



export function hasScrollbar() {

  if (typeof window.top.innerWidth === 'number') {
    return window.top.innerWidth > window.top.document.documentElement.clientWidth;
  }

  // rootElem for quirksmode
  var rootElem = window.top.document.documentElement || window.top.document.body;

  // Check overflow style property on body for fauxscrollbars
  var overflowStyle;

  if (typeof rootElem.style !== 'undefined') {
    overflowStyle = rootElem.style.overflow;
  }

  overflowStyle = overflowStyle || window.top.getComputedStyle(rootElem, '').overflow;

  // Also need to check the Y axis overflow
  var overflowYStyle;

  if (typeof rootElem.style !== 'undefined') {
    overflowYStyle = rootElem.style.overflowY;
  }

  overflowYStyle = overflowYStyle || window.top.getComputedStyle(rootElem, '').overflowY;

  var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;
  var overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
  var alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

  return (contentOverflows && overflowShown) || (alwaysShowScroll);
}

export function getPages() {
  return {
    
    'buttons-in-components': ButtonComponentsPage,
    
    'card-background': CardBackgroundPage,
    'advanced-cards': CardAdvancedSocialPage,
    
    'card-advanced-social': CardAdvancedSocialPage,
    // 'card-advanced-weather': CardAdvancedWeatherPage,

    'grid': GridBasicPage,

    'avatar-list': ListAvatarPage,

    'loading': LoadingBasicPage,
    
    'navigation': NavigationBasicPage,
 
    'searchbar': SearchbarBasicPage,

    'tabs-icon-text': TabIconTextPage,

  };
}

export function getPageFor(hash) {
  return getPages()[hash];
}

export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
