import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Projects</h1>
      <div className="projects-list">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="projects" key={node.id}>
            <Link to={node.fields.slug}>
              <h3 className="project-title">{node.frontmatter.title}</h3>
            </Link>
            <li className="app-type">{node.frontmatter.appType}</li>
            <li>
              <a href={node.frontmatter.repo}>Repo</a> |{" "}
              <a href={node.frontmatter.demo}>
                Demo - {node.frontmatter.hosting}
              </a>
            </li>
            <li>{node.frontmatter.skills}</li>
            <li>{node.excerpt}</li>
          </div>
        ))}
      </div>
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
            appType
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
