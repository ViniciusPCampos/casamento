import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header role="banner" id="qbootstrap-header">
    <div class="container">
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <a
            href="#"
            class="js-qbootstrap-nav-toggle qbootstrap-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i></i>
          </a>
          <a class="navbar-brand" href="index.html">
            Vinícius & Raquel
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active">
              <a href="#" data-nav-section="home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="groom-bride">
                <span>Noivo &amp; Noiva</span>
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="story">
                <span>Nossa História</span>
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="greetings">
                <span>Greetings</span>
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="when-where">
                <span>When &amp; Where</span>
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="rsvp">
                <span>RSVP</span>
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="gallery">
                <span>Gallery</span>
              </a>
            </li>
          </ul>
        </div>
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
