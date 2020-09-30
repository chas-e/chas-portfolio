import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "../images/chasengineering-icon-192x192.png";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ffffff`,
      marginBottom: `1.45rem`,
      border: `none`,
    }}>

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
          <img src={Logo} alt="chasengineering logo"
            style={{
              maxWidth: `5rem`,
              maxHeight: `7rem`,
            }} />
          &nbsp; &nbsp; &nbsp;
          {siteTitle}

        </Link>

        <ol style={{ display: `flex`, justifyContent: `flex-end`, color: `white`, marginBottom: `1.45rem`, }}>
          <li><a href="#about" className="navLink">About</a></li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li><a href="#projects" className="navLink">Projects</a></li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li><a href="#contact" className="navLink">Contact</a></li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li><a href="" className="navLink">Résumé</a></li>
        </ol>
      </nav>
    </div>
  </header >
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
