import React from 'react'
import Hero from '../../components/contact/Hero/Hero'
import Layout from '../../components/Layout/Layout'
import Map from '../../components/contact/Map/Map'
import Form from '../../components/contact/Form/Form'

const Contact: React.FC = () => {
  return (
    <Layout>
        <Hero />
        <Form />
        <Map />
    </Layout>
  )
}

export default Contact

