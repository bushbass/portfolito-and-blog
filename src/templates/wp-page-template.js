import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
      }
    }
  }
`

function WPPageTemplate({ data }) {
  const page = data.wpgraphql.page
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: page.title }}></h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }}></div>{" "}
    </Layout>
  )
}

export default WPPageTemplate
