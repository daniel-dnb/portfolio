import Head from 'next/head'

import PageBackground from '../components/PageBackground'
import { Container } from '../styles/pages/Home'

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Daniel Bernardes</title>
      </Head>

      <PageBackground>
        <h1>Contact</h1>
      </PageBackground>
    </>
  )
}

export default Contact
