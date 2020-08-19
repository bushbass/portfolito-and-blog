import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
      }
    }
  }
`

function WPPostTemplate({ data }) {
  const post = data.wpgraphql.post
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>{" "}
    </Layout>
  )
}

export default WPPostTemplate
