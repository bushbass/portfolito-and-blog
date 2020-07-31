import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="title-area">
          <div>
            <h1 className="name">Alex Nielsen</h1>
            <h2 className="name title">Web Developer</h2>
          </div>
          <img
            className="my-image"
            src="http://mtnielsen.com/wp-content/uploads/2018/09/me-mets-tiles-web-square-300x300.jpg"
          />{" "}
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
