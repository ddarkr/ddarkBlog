import React, { Component } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../layout"
import SEO from "../components/SEO"
import config from "../../data/SiteConfig"

export default class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Page Not Found - ${config.siteTitle}`} />
        <SEO />
        <div className="container">
          <div className="text-center">
            <h1
              style={{
                margin: 0,
                fontSize: "3.6rem",
              }}
            >
              404
            </h1>
            <p>This page not exist</p>
            <p>
              <Link href="/">Go to main page</Link>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}
