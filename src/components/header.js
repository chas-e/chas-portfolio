import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#da2f47`,
      marginBottom: `1.45rem`,
      border: `none`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav style={{ margin: 0, border: `none`, }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}

        </Link>
        <ol style={{ display: `flex`, justifyContent: `flex-end`, color: `white`, marginBottom: `1.45rem`, }}>
          <li>About</li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li>Projects</li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li>Contact</li>

        </ol>
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

export default Header;
