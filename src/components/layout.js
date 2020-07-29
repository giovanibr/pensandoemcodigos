import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import "./layout.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  let nav = (
    <nav>
      <ol>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/readings">Leituras</Link>
        </li>
      </ol>          
    </nav>
  )

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(2),
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
  } else {
    header = (
      <h1
        style={{
        //   fontFamily: `Montserrat, sans-serif`,
          ...scale(1.6),
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
    <div>
      {nav}

      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >

        <header style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        
          {header}        
        
        </header>
          
        
        <main>{children}</main>
        
        <footer>
          © {new Date().getFullYear()}, Desenvolvido com
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
