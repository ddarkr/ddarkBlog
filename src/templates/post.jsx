import React, { Component } from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layout"
import PostTags from "../components/PostTags"
import SEO from "../components/SEO"
import config from "../../data/SiteConfig"
import { formatDate, editOnGithub } from "../utils/global"
import Utterances from "../components/Utterances"
import styled from "@emotion/styled"

const ToC = styled.div`
  max-width: 400px;
  border-left: 4px solid #ececec;
  padding-left: 20px;
  margin-bottom: 70px;
  a {
    font-size: 14px;
    color: #4c4c4c;
    font-weight: 400;
  }
  ul {
    li {
      margin: 0;
      padding: 0;
      li {
        padding-left: 15px;
      }
      &::before {
        content: none;
      }
    }
  }
`

export default class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter
    let thumbnail

    if (!post.id) {
      post.id = slug
    }

    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    if (post.thumbnail) {
      thumbnail = post.thumbnail.childImageSharp.fixed
    }

    const date = formatDate(post.date)

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} – ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <article className="single container">
          <header
            className={`single-header ${!thumbnail ? "no-thumbnail" : ""}`}
          >
            {thumbnail ? (
              <Img fixed={post.thumbnail.childImageSharp.fixed} />
            ) : null}
            <div className="flex">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <time className="date">{date}</time>
              </div>
              <PostTags tags={post.tags} />
            </div>
          </header>
          <ToC>
            <div
              dangerouslySetInnerHTML={{ __html: postNode.tableOfContents }}
            />
          </ToC>
          <div
            className="post"
            dangerouslySetInnerHTML={{ __html: postNode.html }}
          />
          <Utterances />
        </article>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      tableOfContents(pathToSlugField: "frontmatter.slug", maxDepth: 6)
      timeToRead
      excerpt
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        slug
        date
        categories
        tags
        template
      }
      fields {
        slug
        date
      }
    }
  }
`
