import Head from 'next/head'
import { Container } from '../styles/pages/Home'

import VercelSVG from '../assets/vercel.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Daniel Bernardes</title>
      </Head>

      <VercelSVG />
      <h1>Hellcome to my portfolio</h1>
      <p>A ReactJS + Next.js stucture made by Daniel.</p>
    </Container>
  )
}

export default Home
