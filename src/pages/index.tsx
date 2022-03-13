import Head from 'next/head'
import { useRouter } from 'next/router'
import ConsoleBox from '../components/ConsoleBox'
import PageBackground from '../components/PageBackground'
import {
  BackgroundText,
  Container,
  Grid,
  GridContainer,
  HomeContainer,
  TextColor
} from '../styles/pages/Home'

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
            <GridContainer Side="left">
              <BackgroundText>
                import <TextColor Color="white">{'React'}</TextColor> from{' '}
                <TextColor Color="yellow">{"'react'"}</TextColor>
                <br />
                <br />
                const <TextColor Color="blue">{'Home'}</TextColor>:{' '}
                <TextColor Color="purple">{'React.FC'}</TextColor> ={' '}
                <TextColor Color="yellow">{'()'}</TextColor> {'=>'}{' '}
                <TextColor Color="yellow">{'{'}</TextColor>
                <br />
                &nbsp;&nbsp;{'return ('}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'<'}</TextColor>div
                <TextColor Color="white">{'>'}</TextColor>
                <br />
              </BackgroundText>
              <HomeContainer>
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
                  <ConsoleBox Width="70rem" Window="Small"></ConsoleBox>
                </div>
              </HomeContainer>
              <BackgroundText>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'</'}</TextColor>div
                <TextColor Color="white">{'>'}</TextColor>
                <br />
                &nbsp;&nbsp;{')'}
                <br />
                <TextColor Color="yellow">{'}'}</TextColor>
                <br />
                <br />
                export default <TextColor Color="blue">Home</TextColor>
              </BackgroundText>
            </GridContainer>
            <GridContainer Side="right">
              <ConsoleBox Width="70rem" Window="Large">
                Sexo
              </ConsoleBox>
            </GridContainer>
          </Grid>
        </Container>
      </PageBackground>
    </>
  )
}

export default Home
