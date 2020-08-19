import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Project({ data }) {
  const project = data.markdownRemark
  return (
    <Layout>
      <div className="project-template">
        <h1>{project.frontmatter.title}</h1>
        <div
          className="project-template-main"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
        <p>
          <span className="project-bullet-text">Project Type</span> -{" "}
          {project.frontmatter.appType}
        </p>
        <p>
          <span className="project-bullet-text">Skills used</span> -{" "}
          {project.frontmatter.skills}
        </p>
        <p>
          <span className="project-bullet-text">Hosted on</span> -{" "}
          {project.frontmatter.hosting}
        </p>
        <p>
          <span className="project-bullet-text">Repo</span> -{" "}
          {project.frontmatter.repo}
        </p>
        <p>
          <span className="project-bullet-text">Demo</span> -{" "}
          {project.frontmatter.demo}
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        appType
        skills
        hosting
        repo
        demo
      }
    }
  }
`
