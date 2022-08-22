import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"

function Footer() {
  return (
    <footer>
      <div>
        {`</> by`} <strong>Bruno</strong>
      </div>
      <div className="footer-links">
        <a
          href="https://github.com/brunogoncalvess"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/brunrsg/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer
