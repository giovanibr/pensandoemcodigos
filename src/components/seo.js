/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title, type, location, date }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
              summary
            }
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const { author, social } = data.site.siteMetadata

  const metaDescription = description || data.site.siteMetadata.description

  const structuredDataOrganization = `{
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "Pensando em Códigos",
		"url": "https://pensandoemcodigos.net/index.html",
		"foundingDate": "2020",
		"founders": [{
			"@type": "Person",
			"name": "${author.name}"
		}],
  	}`

  const structuredDataArticle = `{
		"@context": "http://schema.org",
		"@type": "${type}",
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://google.com/article"
		},
		"headline": "${title}",
		"datePublished": "${date}",
		"author": {
			"@type": "Person",
			"name": "${author.name}"
		},
		"publisher": {
			"@type": "Organization",
			"name": "Pensando em Códigos",
		},
		"description": "${metaDescription}",
		"url": "${location}"
  }`

  return (
    <Helmet>
      <html lang="pt-br" dir="ltr" />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />

      <meta property="og:title" content={title}/>
      <meta property="og:description" content={metaDescription}/>
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'}/>
      <meta property="og:url" content={location}/>     

      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:creator" content={social.twitter}/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={metaDescription}/>

      <script type="application/ld+json">
        {type === 'article'
          ? structuredDataArticle
          : structuredDataOrganization}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
  location: `https://pensandoemcodigos.net/index.html`
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
