import * as React from "react"
import { Link } from "gatsby"
import face from "../images/face.png" 
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import mail from "../images/mail.svg"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <main>
      <title>Vasyl Ostapenko</title>
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">Vasyl Ostapenko</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="wrapper">
        <div className="box box1">
          <img src={face} alt="Vasyl's face" id="face"></img>
        </div>
        <div className="box box2">
          <h2>Statistics student at UCSB / Intern at Roivant Sciences</h2>
          <p>Vasyl is a junior at UC Santa Barbara studying Statistics and Data Science. He is interested in software development, biotechnology, and financial markets. He is currently working on analysis and visualization of single cell data with PIVant. In his free time, Vasyl loves going on biking, surfing, or skiing adventures.</p>
        </div>
        <div className="box box3">
          <ul>
            <div className="allsocials">
              <li>
                <a href="https://github.com/ostapenkov10">
                  <img src={github} alt="GitHub link" className="social"></img></a></li>
              <li>
                <a href="https://www.linkedin.com/in/vasyl-ostapenko/">
                  <img src={linkedin} alt="LinkedIn link" className="social"></img></a></li>
              <li>
                <a href="mailto:vasylostapenko10@gmail.com">
                  <img src={mail} alt="Email link" className="social"></img></a></li>
            </div>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
