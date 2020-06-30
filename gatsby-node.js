const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // const resourcesTemplate = path.resolve(`./src/templates/resources.js`)
  // const categoryTemplate = path.resolve("src/templates/categories.js");

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tag
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const tag = post.node.frontmatter.tag

    // if(tag == "post"){
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          tag: post.node.frontmatter.tag,
          previous,
          next,
        },
      })
    // }

    
  })

  // let tags = []
  // _.each(posts, edge => {
  //   if (_.get(edge, "node.frontmatter.tags")) {
  //     tags = tags.concat(edge.node.frontmatter.tags);
  //   }
  // });

  // tags = _.uniq(tags);

  // tags.forEach(tag => {
  //   createPage({
  //     path: `/categories/${_.kebabCase(tag)}/`,
  //     component: categoryTemplate,
  //     context: {
  //       tag,
  //     },
  //   });
  // });

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
