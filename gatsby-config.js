module.exports = {
  // pathPrefix: `/pensandoemcodigos`,
  siteMetadata: {
    title: `Pensando em Códigos`,
    author: {
      name: `Giovani Racca`,
      summary: `confinado, brincando com Gatsby, escrevendo e estudando javascript, typescript, nodejs, kotlin e mais algumas coisas.`,
    },
    description: `Um espaço onde vou consolidando antigos e novos conhecimentos em programação: muito javascript, typescript, nodejs, kotlin, spring, etc.`,
    siteUrl: `http://pensandoemcodigos.net/`,
    social: {
      twitter: `giovanibr`,
    },
    menuLinks:[{
      name:'home',
      link:'/'
    },
    {
      name:'resources',
      link:'/resources'
    }]
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/readings`,
        name: `readings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              // rel: "noopener noreferrer"
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-53336905-3`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pensando em Códigos - Blog por Giovani Racca`,
        short_name: `Pensando em Códigos`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `pensandoemcodigos`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
