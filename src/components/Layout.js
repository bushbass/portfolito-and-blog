import React from "react"
import Nav from "./Nav"
import Footer from "../components/Footer"
import "../styles/index.css"

function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout-content">
        <Nav />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
