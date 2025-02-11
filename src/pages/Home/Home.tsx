import React from 'react'
import Hero from '../../components/home/Hero/Hero'
import Discover from '../../components/home/Discover/Discover'
import Layout from '../../components/Layout/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
        <Hero />
        <Discover />
    </Layout>
  )
}

export default Home
