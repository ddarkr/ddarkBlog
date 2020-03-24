import React, { Component } from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import GitHubButton from "react-github-btn"
import Layout from "../layout"
import PostListing from "../components/PostListing"
import SEO from "../components/SEO"
import config from "../../data/SiteConfig"

export default class Index extends Component {
  render() {
    const popularPostEdges = this.props.data.latest.edges
    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Associate Android Developer`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <h1
              style={{
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              <span role="img" aria-label="Developer">
                👨‍💻
              </span>{" "}
              Welcome
            </h1>
            <p>풀스택 지망 개발자의 작은 개발 블로그</p>
            <div className="social-buttons">
              <div>
                <GitHubButton
                  href="https://github.com/ddarkr"
                  data-size="large"
                  data-show-count="false"
                  aria-label="Follow @ddarkr on GitHub"
                >
                  Follow
                </GitHubButton>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="section">
            <h2>Latest articles</h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
