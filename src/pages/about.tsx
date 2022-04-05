import { NextPage } from 'next'
import Head from 'next/head'
import {
  AboutBackgroundText,
  Description,
  Subtitle,
  Title
} from '../components/AboutBackgroundText'
import ConsoleAboutPage from '../components/ConsoleAboutPage'
import ConsoleBox from '../components/ConsoleBox'
import PageBackground from '../components/PageBackground'
import TechnologiesBox from '../components/TechnologiesBox'
import {
  ConsoleContainer,
  Container,
  DescriptionContent,
  FlexConsole,
  Grid,
  GridContainer,
  SecondTitle,
  TitleContent
} from '../styles/pages/About'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Bernardes — About</title>
      </Head>

      <PageBackground>
        <Container>
          <Grid>
            <GridContainer Side="left">
              <AboutBackgroundText>
                <Title>
                  <TitleContent>About Me</TitleContent>
                </Title>
                <Description>
                  <DescriptionContent>
                    I'm a Front-End Developer situated in Brazil. I have a
                    genuine energy for working with ReactJS, being my greatest
                    strength.
                    <br />
                    <br />
                    Efficient individual, issue solver, independent employee
                    with high attention to detail.
                    <br />
                    <br />
                    Inspired by the whole frontend range and working on
                    ambitious projects with confident people.
                  </DescriptionContent>
                </Description>
                <Subtitle>
                  <SecondTitle>
                    Skills and
                    <br />
                    Experience
                  </SecondTitle>
                </Subtitle>
                <Description>
                  <DescriptionContent>
                    I started my developer journey in 2018 when I worked on a
                    game building project, taking care of the entire website and
                    database development project.
                    <br />
                    <br />
                    From there, I work as a freelancer to code responsive
                    interfaces with <span>HTML</span>, <span>CSS</span>,{' '}
                    <span>JavaScript</span>, <span>TypeScript</span> and{' '}
                    <span>ReactJS</span>. Always striving for a clean and easy
                    to understand code.
                  </DescriptionContent>
                </Description>
                <TechnologiesBox side="left" />
                <ConsoleContainer>
                  <ConsoleBox
                    title="skills"
                    height="28rem"
                    window="Small"
                    margintop="30px"
                  >
                    <ConsoleAboutPage />
                  </ConsoleBox>
                </ConsoleContainer>
              </AboutBackgroundText>
            </GridContainer>
            <GridContainer Side="right">
              <TechnologiesBox side="right" />
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
