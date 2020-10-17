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
        <Helmet title={`${config.siteTitle} (도다 블로그)`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <h1
              style={{
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              안녕하세요
              {" "}
              <span role="img" aria-label="Handwave">
                👋
              </span>
            </h1>
            <p>
              이름은 정도현, 닉네임은 &quot;도다&quot;라고 합니다. 
              <br />
              깔끔한 코드와 주석을 좋아하고, 항상 부족하여 언제나 배워나가는 개발자입니다.
              <br />
              <br />
              더 많은 내용은 깃헙에서 봐주세요.
            </p>
            <div className="social-buttons">
              <div>
                <GitHubButton
                  href="https://github.com/ddarkr"
                  data-size="large"
                  data-show-count="false"
                  aria-label="Follow @ddarkr on GitHub"
                >
                  Github
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
