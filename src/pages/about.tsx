import { NextPage } from 'next'
import Head from 'next/head'
import ConsoleAboutPage from '../components/ConsoleAboutPage'
import ConsoleBox from '../components/ConsoleBox'
import PageBackground from '../components/PageBackground'
import {
  BackgroundText,
  ConsoleContainer,
  Container,
  Description,
  FlexConsole,
  Grid,
  GridContainer,
  SecondTitle,
  TextColor,
  Title
} from '../styles/pages/About'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Bernardes</title>
      </Head>

      <PageBackground>
        <Container>
          <Grid>
            <GridContainer Side="left">
              <BackgroundText>
                import
                <TextColor Color="white">{' React'}</TextColor> from{' '}
                <TextColor Color="yellow">{"'react'"}</TextColor>
                <br />
                <br />
                const
                <TextColor Color="blue"> About</TextColor>:{' '}
                <TextColor Color="purple">React.FC</TextColor> ={' '}
                <TextColor Color="yellow">{'()'}</TextColor> {'=>'}{' '}
                <TextColor Color="yellow">{'{'}</TextColor>
                <br />
                &nbsp;&nbsp;{'return ('}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'<'}</TextColor>div
                <TextColor Color="white">{'>'}</TextColor>
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'<'}</TextColor>h2
                <TextColor Color="white">{'>'}</TextColor>
                {/*-----------------------*/}
                <Title>About Me</Title>
                {/*-----------------------*/}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'</'}</TextColor>h2
                <TextColor Color="white">{'>'}</TextColor>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'<'}</TextColor>p
                <TextColor Color="white">{'>'}</TextColor>
                {/*-----------------------*/}
                <Description>
                  I'm a Front-End Developer situated in Brazil. I have a genuine
                  energy for working with ReactJS, being my greatest strength.
                  <br />
                  <br />
                  Efficient individual, issue solver, independent employee with
                  high attention to detail.
                  <br />
                  <br />
                  Inspired by the whole frontend range and working on ambitious
                  projects with confident people.
                </Description>
                {/*-----------------------*/}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'</'}</TextColor>p
                <TextColor Color="white">{'>'}</TextColor>
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'<'}</TextColor>h3
                <TextColor Color="white">{'>'}</TextColor>
                {/*-----------------------*/}
                <SecondTitle>
                  Skills and
                  <br />
                  Experience
                </SecondTitle>
                {/*-----------------------*/}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'</'}</TextColor>h3
                <TextColor Color="white">{'>'}</TextColor>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'<'}</TextColor>p
                <TextColor Color="white">{'>'}</TextColor>
                {/*-----------------------*/}
                <Description>
                  I started my developer journey in 2018 when I worked on a game
                  building project, taking care of the entire website and
                  database development project.
                  <br />
                  <br />
                  From there, I work as a freelancer to code responsive
                  interfaces with <span>HTML</span>, <span>CSS</span>,{' '}
                  <span>JavaScript</span>, <span>TypeScript</span> and{' '}
                  <span>ReactJS</span>. Always striving for a clean and easy to
                  understand code.
                </Description>
                {/*-----------------------*/}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'</'}</TextColor>p
                <TextColor Color="white">{'>'}</TextColor>
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/*-----------------------*/}
                <ConsoleContainer>
                  <ConsoleBox title="skills" height="28rem" window="Small">
                    <ConsoleAboutPage />
                  </ConsoleBox>
                </ConsoleContainer>
                {/*-----------------------*/}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <TextColor Color="white">{'</'}</TextColor>div
                <TextColor Color="white">{'>'}</TextColor>
                <br />
                &nbsp;&nbsp;{')'}
                <br />
                <TextColor Color="yellow">{'}'}</TextColor>
                <br />
                <br />
                export default
                <TextColor Color="blue"> About</TextColor>
              </BackgroundText>
            </GridContainer>
            <GridContainer Side="right">
              <img
                className="StudyingPNG"
                src="/StudyingPNG.png"
                alt="Uma arte minha sentado estudando, olhando para um caderno que está em cima da mesa, com uma caneta na mão e um notebook à frente do caderno"
              />
              <FlexConsole>
                <img
                  src="/TomandoCafe.png"
                  alt="Uma arte minha em pé, como se tivesse encostado em um muro com um dos pés levantado e encostando na parede. E estou com uma chícara de café na mão"
                />
                <ConsoleBox
                  title="skills"
                  width="40vw"
                  height="28rem"
                  window="Large"
                >
                  <ConsoleAboutPage />
                </ConsoleBox>
              </FlexConsole>
            </GridContainer>
          </Grid>
        </Container>
      </PageBackground>
    </>
  )
}

export default About
