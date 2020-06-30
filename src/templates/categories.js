import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Categories = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges: posts } = data.allMarkdownRemark;
// **Here you don't need this anonymous func (it even breaks because of it)**
//return (
  //{() => {
    if (tag === "about") {
// **simple return statement is enough**
     return (
        <AboutPage passInDataInProps />
     )
    }
  //}}
//);
};

Categories.propTypes = {
pathContext: PropTypes.shape({
  tag: PropTypes.string.isRequired,
}),
data: PropTypes.shape({
  allMarkdownRemark: PropTypes.shape({
// **there is no totalCount at all :P**
// totalCount: PropTypes.number.isRequired,
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          frontmatter: PropTypes.shape({
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          }),
        }),
      }).isRequired
    ),
  }),
}),
};

export default Categories;

// export const pageQuery = graphql`
//   query CategoryPage($tag: String) {
//     allMarkdownRemark(
//       limit: 2000
//       sort: { order: DESC, fields: [frontmatter___date]}
//       filter: { frontmatter: { tags: { in : [$tag] } } }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 250)
//           id
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             path
//           }
//         }
//       }
//     }
//   }
// `;