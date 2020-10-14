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
          <span className="project-bullet-text">Hosting</span> -{" "}
          {project.frontmatter.hosting}
        </p>
        <p>
          <span className="project-bullet-text">Repo</span> -{" "}
          <a href={project.frontmatter.repo}>{project.frontmatter.repo}</a>
        </p>
        <p>
          <span className="project-bullet-text">Demo</span> -{" "}
          <a href={project.frontmatter.demo}>{project.frontmatter.demo}</a>
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
