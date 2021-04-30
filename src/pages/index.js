import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout.jsx"

// markup
const IndexPage = () => {
  return (
    <Layout>
      Head over to the <Link to="/app">app</Link>.
    </Layout>
  )
}

export default IndexPage
