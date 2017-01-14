// snippet from https://github.com/andyearnshaw/Intl.js/pull/121
export default function shim(cb) {
  let root = window ? window : global;
  if (root && root.Intl) {
    return setTimeout(cb, 0);
  }

  require.ensure(['intl'], require => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/uk.js');
    require('intl/locale-data/jsonp/ru.js');
    cb();
  }, 'intl-polyfill');
}