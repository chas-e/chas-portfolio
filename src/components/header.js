import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Logo from "../images/chasengineering-icon-192x192.png"
import Res from "../docs/charles-eubanks-resume.pdf"

import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
    style={{
      backgroundColor: `RGBA(252, 252, 252, .85)`,
      marginBottom: `1.45rem`,
      // border: `none`,
      width: `100%`,
      height: `20vh`,
      position: `fixed`,
    }}
  >

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        position: `relative`,
      }}
    >
      <nav
        style={{
          margin: `0 auto`,
        }}
      >
        <h1
          style={{
            border: `none`,
          }}
        >
          <Link
            to="/"
            style={{
              display: `flex`,
              justifyContent: `space-evenly`,
              textDecoration: `none`,
            }}
          >
            <img src={Logo} alt="chasengineering logo"
              style={{
                maxWidth: `5rem`,
                maxHeight: `10 rem`,
              }}
            />
          &nbsp; &nbsp; &nbsp;
          {siteTitle}

          </Link>
        </h1>

        <h3>
          <ul
            style={{
              display: `flex`,
              justifyContent: `flex-end`,
              color: `white`,
              marginBottom: `1.45rem`,
              alignContent: `flex-end`,
              listStyle: `none`,
            }}
          >
            <li><a href="#about" className="navLink">About</a></li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li><a href="#projects" className="navLink">Projects</a></li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li><a href="#contact" className="navLink">Contact</a></li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li><a href={Res} className="navLink">Résumé</a></li>
          </ul>
        </h3>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
