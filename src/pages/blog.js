import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Blog({ data }) {
  const wpPosts = data.wpgraphql.posts.nodes

  return (
    <Layout>
      <h1>Blog</h1>

      <h3>
        My recent posts are sourced from Markdown files and built with Gatsby.
        Older posts are sourced from my old WordPress site.
      </h3>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
          </Link>
          <p>
            {node.excerpt}
            <br />
          </p>
        </article>
      ))}
      <hr />
      <h3>The following posts are being sourced from my old wordpress site.</h3>
      {wpPosts.map(wpPost => (
        <article key={wpPost.id}>
          <h3>
            <Link to={`/old-blog/${wpPost.uri}`}>
              {" "}
              {wpPost.title} — {wpPost.date}
            </Link>
            {/* <Link
              to={`/old-blog/${wpPost.uri}`}
              dangerouslySetInnerHTML={{ __html: wpPost.title }}
            /> */}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: wpPost.excerpt }}></div>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    wpgraphql {
      posts(first: 100) {
        nodes {
          excerpt
          id
          title
          date
          uri
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          timeToRead
          excerpt
        }
      }
      totalCount
    }
  }
`
