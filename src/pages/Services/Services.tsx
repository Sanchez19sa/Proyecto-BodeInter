import React from 'react'
import Layout from '../../components/Layout/Layout'
import Hero from '../../components/services/Hero/Hero'
import Discover from '../../components/services/Discover/Discover'

const Services: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Discover />
    </Layout>
  )
}

export default Services

