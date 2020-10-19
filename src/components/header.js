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
      marginBottom: `3vmin`,
      width: `100%`,
      maxHeight: `12vh`,
      position: `fixed`,
      padding: `3vmin`,
    }}
  >
    <nav className={styles.nav}>
      <h2
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
              maxWidth: `5vw`,
              height: `8vh`,
            }}
          />
          {siteTitle}

        </Link>
      </h2>

      <h4>
        <ul
          style={{
            display: `flex`,
            marginBottom: `2vmin`,
            listStyle: `none`,
          }}
        >
          <li><a href="#about" className="navLink">About</a></li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li><a href="#projects" className="navLink">Projects</a></li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li><a href="#contact" className="navLink">Contact</a></li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li><a href={Res} rel="noreferrer" target="_blank" className="navLink">Résumé</a></li>
        </ul>
      </h4>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
