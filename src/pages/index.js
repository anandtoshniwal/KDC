import * as React from "react"
import Team from "../components/team"

import Layout from "../components/layout"
import Tout from "../components/tout"
import Seo from "../components/seo"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Tout />
    <Services />
    <Team />
  </Layout>
)

export default IndexPage
