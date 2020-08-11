import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me-wearing-hat.jpg" }) {
        id
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <main>
        <div className="title-area">
          <div>
            <h1 className="name">Alex Nielsen</h1>
            <h2 className="name title">Web Developer</h2>
          </div>
          <Img
            className="my-image-new"
            fluid={data.file.childImageSharp.fluid}
            alt="Alex Nielsen wearing a baseball cap"
          />
          {/* <img
            className="my-image"
            alt="Alex Nielsen wearing a baseball cap"
            src="http://mtnielsen.com/wp-content/uploads/2018/09/me-mets-tiles-web-square-300x300.jpg"
          /> */}{" "}
        </div>
        <h3>HTML / CSS / Javascript / React </h3>
        <p>
          make contact easy, put social or contact in main and footer or maybe
          make social media icons fixed when navigating the page
        </p>

        <p>Skills section goes here</p>

        <div>
          <p>
            Making a return to tech after taking some time to care for my
            children. I am currently seeking a full-time web developer role.
          </p>
        </div>
      </main>
    </Layout>
  )
}
