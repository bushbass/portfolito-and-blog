import React from "react"
import Header from "../components/Header"

export default function Home() {
  return (
    <main>
      <Header />
      <h1 class="name">Alex Nielsen</h1>
      <h2 class="name title">Web Developer</h2>
      <h3>HTML / CSS / Javascript / React </h3>
      <p>
        make contact easy, put social or contact in main and footer or maybe
        make social media icons fixed when navigating the page
      </p>
      <div>
        <img
          class="my-image"
          src="http://mtnielsen.com/wp-content/uploads/2018/09/me-mets-tiles-web-square-300x300.jpg"
        />
      </div>
      <p>Skills section goes here</p>

      <div>
        <p>
          Making a return to tech after taking some time to care for my
          children. I am currently seeking a full-time web developer role.
        </p>
      </div>
    </main>
  )
}
