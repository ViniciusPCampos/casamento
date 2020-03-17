/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <footer id="footer" role="contentinfo">
        <div className="container">
          <div className="row row-bottom-padded-sm">
            <div className="col-md-12">
              <p className="copyright text-center">
                &copy; 2017 <a href="index.html">Wedding</a>. All Rights
                Reserved. Images by{" "}
                <a href="http://unsplash.com/" target="_blank">
                  Unsplash
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="social social-circle">
                <li>
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
