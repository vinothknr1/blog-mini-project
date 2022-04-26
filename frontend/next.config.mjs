const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  PublicRuntimeConfig: {
    APP_NAME: 'LSUE',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    API_PRODUCTION: 'https://seoblog.com/api',
    PRODUCTION: false,
  },
});
