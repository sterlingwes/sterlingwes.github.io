export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Wes Johnson', // Navigation and Site Title
  siteTitleAlt: 'Wes Johnson - Web, Mobile, Full-stack Development', // Alternative Site title for SEO
  siteUrl: 'http://swj.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/assets/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '/assets/bg.jpg', // default post background header
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'My blog', // Your site description
  author: 'Wes Johnson', // Author for schemaORGJSONLD
  siteLogo: '/assets/logo.png', // Image for schemaORGJSONLD

  userTwitter: '@sterlingwes', // Twitter Username - Optional
  ogLanguage: 'en_CA', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#005CFF',
  backgroundColor: '#2b2e3c',

  // Settings for typography.ts
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',

  // Social media
  siteFBAppID: '',

  //
  Google_Tag_Manager_ID: 'GTM-XXXXXXX',
  POST_PER_PAGE: 4,
};
