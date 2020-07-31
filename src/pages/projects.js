import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Projects</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="projects" key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <li>
            {console.log(node.frontmatter)}
            <a href={node.frontmatter.repo}>Repo</a> -{" "}
            <a href={node.frontmatter.demo}>
              Demo hosted on {node.frontmatter.hosting}
            </a>
          </li>
          <li>{node.frontmatter.skills}</li>
          <li>{node.excerpt}</li>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            hosting
            repo
            skills
            demo
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
