import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <h3>
          Excuse the dummy blog posts here. I am currently migrating my old blog
          from wordpress to Gatsby (this site). Going forward, my blog posts
          will be written in Markdown and the pages created by Gatsby. I will
          initially be using gatsby-source-wordpress to import my old blogs but
          ultimately I plan on converting all the old wordpress posts to
          markdown and have them on Gatsby as well. The old blog can be found
          here: <a href="http://AlexNielsen.com">AlexNielsen.com</a>
        </h3>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              {console.log(node)}
            </Link>
            <p>
              {node.excerpt}
              <br />
              Time to read {node.timeToRead}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
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
