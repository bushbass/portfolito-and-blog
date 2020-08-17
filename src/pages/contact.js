import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <div>
        <h1>Contact Me</h1>
        <p>
          My email address can be found on my{" "}
          <a href="http://AlexNielsen.com/resume">current resume</a>
        </p>
        <p>
          You can also reach me through{" "}
          <a href="https://linkedin.com/in/alex-nielsen-nj">LinkedIn</a> or{" "}
          <a href="https://twitter.com/BigAlsHouse">Twitter</a>
        </p>
        <div className="social-image-container">
          <a href="http://AlexNielsen.com/resume">
            <img
              className="social-image"
              src={`../../social/gmail.png`}
              alt="gmail logo"
            />
          </a>
          <a href="https://linkedin.com/in/alex-nielsen-nj">
            <img
              className="social-image"
              src={`../../social/linkedin.png`}
              alt="linkedin logo"
            />
          </a>
          <a href="https://twitter.com/BigAlsHouse">
            <img
              className="social-image"
              src={`../../social/twitter.png`}
              alt="twitter logo"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCqdNQHOLz3PmB4cDvQkdQ1w/">
            <img
              className="social-image"
              src={`../../social/youtube.png`}
              alt="youtube logo"
            />
          </a>
        </div>
      </div>
    </Layout>
  )
}
