import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout.jsx"
import "./home.css"

const IndexPage = () => {
  return (
    <Layout>
    <div className="banner">
      Nothing here yet! Head over to the <Link to="/app">app</Link>.
    </div>
    </Layout>
  )
}

export default IndexPage
