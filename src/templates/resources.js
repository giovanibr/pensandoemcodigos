import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
// import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const ResourcesTemplate = ({location}) => {
   const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            Recursos
          </h1>
          
            
            
          
          
          
        </header>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
        
      </article>
    </Layout>
  )
}

export default ResourcesTemplate
