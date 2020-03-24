import React, { Component } from "react"
import Helmet from "react-helmet"
import Layout from "../layout"
import SEO from "../components/SEO"
import config from "../../data/SiteConfig"

export default class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`404 Not Found - ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="text-center">
            <h1
              style={{
                margin: 0,
                fontSize: "3.2rem",
              }}
            >
              404
            </h1>
            <p>Page not found.</p>
          </div>
        </div>
      </Layout>
    )
  }
}
