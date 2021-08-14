import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const NotFoundPage = () => {
  return (
    <main>
      <title>Error 404</title>
      <div>
        <h1>Page not found.</h1>
        <p><Link to="/">Go home</Link>.</p>
      </div>
    </main>
  )
}

export default NotFoundPage
