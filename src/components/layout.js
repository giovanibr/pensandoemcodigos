import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children, menuLinks }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  let resources

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.6),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          // textAlign: `center`
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
    resources = (
      <h4
        style={{
          ...scale(.3),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          // marginLeft: rhythm(2),
          textAlign: `left`
        }}
      >
      {/* <Link style={{ boxShadow: `none`, color: `inherit`, marginLeft: rhythm(.5) }} to='/resources'>
        Sobre
      </Link> &nbsp;
      <Link style={{ boxShadow: `none`, color: `inherit`, marginLeft: rhythm(1.5) }} to='/resources'>
        Recursos
      </Link> */}
      </h4>
    )
  } else {
    header = (
      <h1
        style={{
        //   fontFamily: `Montserrat, sans-serif`,
          //...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      {resources}
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Desenvolvido com
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
