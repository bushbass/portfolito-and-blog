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
      {console.log("Social Icons are from https://designmodo.com/")}
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
        </div>

        <h3>TECHNICAL SKILLS</h3>
        <p>
          HTML, CSS, JavaScript, React, Gatsby, Node/Express, MERN, REST APIs,
          Bootstrap, Git, Responsive Web Design, Photoshop{" "}
        </p>
        <h3>SOFT SKILLS</h3>
        <p>
          Eager to learn and develop new skills, Adaptable, Strong Work Ethic,
          Great Customer Service, Effective Communicator
        </p>

        <div>
          <p>
            I've been at home taking care of the kids the past few years but now
            I'm ready to make a move back into full-time. Ideally I'd like to be
            working in music/entertainment or education (I spent a few years
            teaching music), but I would be very happy working anywhere that has
            a supportive team and that will allow me to continue learning and
            growing my skills.
          </p>
        </div>
        <div className="social-image-container">
          <a href="http://AlexNielsen.net/resume">
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
      </main>
    </Layout>
  )
}
