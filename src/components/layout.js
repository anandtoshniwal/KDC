/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../components/footer"
import Video from "../assets/video.mp4"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>Kranti Dental Clinic</title>
        <meta
          name="description"
          content="Established in the year 1986, Dr. Sunita Doibale’s Kranti Dental Clinic in Jawahar Colony, Aurangabad-Maharashtra is one of the top players in the city. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Aurangabad-Maharashtra."
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="bg-black" id="home">
        <video className="my-0 myx-auto w-full lg:h-lg " controls autoplay loop>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">{children}</div>
          {/* /End replace */}
        </div>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
