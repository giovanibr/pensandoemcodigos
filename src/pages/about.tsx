// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} >
      <SEO title="About" />
      <Bio />

      <div
        style={{
          marginLeft: rhythm(.5),
          maxWidth: rhythm(20)
        }}
      >

        <h2>Em construção</h2>

        <h2>Redes</h2>
        <ol style={{listStyleType: 'none'}}>
          <li><a href='https://twitter.com/giovanibr' target='_blank'>Twiiter</a></li>          
          <li><a href='https://github.com/giovanibr' target='_blank'>Github</a></li>
          <li><a href='https://stackoverflow.com/users/11875890/giovanibr' target='_blank'>Stack Overflow</a></li>
          <li><a href='https://www.linkedin.com/in/giovanibr/' target='_blank'>LinkedIn</a></li>
        </ol>

      </div>

      
      
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
