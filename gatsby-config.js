module.exports = {
  pathPrefix: "/BlackcoinNL",
  siteMetadata: {
    title: "BlackcoinNL",
    author: "Daniel Clough",
    description: "BlackcoinNL is..."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
   resolve: `gatsby-source-ghost`,
   options: {
       apiUrl: `https://Blackcoin.nl`,
       contentApiKey: `8b37b1ccb662f168a4b376c7e6`,
       version: `v3` // Ghost API version, optional, defaults to "v3".
                     // Pass in "v2" if your Ghost install is not on 3.0 yet!!!
   }
},
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
