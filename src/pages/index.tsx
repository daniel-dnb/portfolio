import Head from 'next/head'
import { useRouter } from 'next/router'
import ConsoleBox from '../components/ConsoleBox'
import PageBackground from '../components/PageBackground'
import { Container, Grid } from '../styles/pages/Home'

const Home: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Daniel Bernardes</title>
      </Head>
      <PageBackground>
        <Container>
          <Grid>
            <div className="grid-container-left">
              <div className="code">
                <div className="text">
                  import <span className="white">{'React'}</span> from{' '}
                  <span className="yellow">{"'react'"}</span>
                  <br />
                  <br />
                  const <span className="blue">{'Home'}</span>:{' '}
                  <span className="purple">{'React.FC'}</span> ={' '}
                  <span className="yellow">{'()'}</span> {'=>'}{' '}
                  <span className="yellow">{'{'}</span>
                  <br />
                  &nbsp;&nbsp;{'return ('}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="white">{'<'}</span>div
                  <span className="white">{'>'}</span>
                  <br />
                </div>
                {/*---------------Inside the Code---------------*/}
                <div className="INSIDE">
                  <div className="title">
                    <h1>
                      Hi,
                      <br />
                      I’m <span>Daniel</span>
                    </h1>
                  </div>
                  <div className="subtitle">
                    I’m a Brazilian frontend developer.
                  </div>
                  <div className="button">Contact Me!</div>
                </div>
                <ConsoleBox Width="70rem" Window="Small"></ConsoleBox>
                {/*---------------Inside the Code---------------*/}
                <div className="text">
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="white">{'</'}</span>div
                  <span className="white">{'>'}</span>
                  <br />
                  &nbsp;&nbsp;{')'}
                  <br />
                  <span className="yellow">{'}'}</span>
                  <br />
                  <br />
                  export default <span className="blue">Home</span>
                </div>
              </div>
            </div>
            <div className="grid-container-right">
              <ConsoleBox Width="70rem" Window="Large">
                Sexo
              </ConsoleBox>
            </div>
          </Grid>
        </Container>
      </PageBackground>
    </>
  )
}

export default Home
