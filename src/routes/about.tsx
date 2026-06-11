import { createFileRoute } from '@tanstack/react-router'
import {
  AboutBackgroundText,
  Description,
  Subtitle,
  Title
} from '../components/AboutBackgroundText'
import ConsoleAboutPage from '../components/ConsoleAboutPage'
import ConsoleBox from '../components/ConsoleBox'
import PageBackground from '../components/PageBackground'
import PageHead from '../components/PageHead'
import TechnologiesBox from '../components/TechnologiesBox'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'Daniel Bernardes - About'
      },
      {
        name: 'description',
        content:
          "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. About me."
      },
      {
        property: 'og:title',
        content: 'Daniel Bernardes - About'
      }
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://www.danielbnd.com/about'
      }
    ]
  }),
  component: About
})

function About() {
  return (
    <PageHead
      title="Daniel Bernardes - About"
      description="Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. About me."
    >
      <PageBackground>
        <div className="page-container">
          <div className="page-grid page-grid--wide">
            <div className="page-grid-col">
              <AboutBackgroundText>
                <Title>
                  <h2 className="about-title-content">About Me</h2>
                </Title>
                <Description>
                  <p className="about-description-content">
                    I&apos;m a Front-End Developer situated in Brazil. I have a
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
                  </p>
                </Description>
                <Subtitle>
                  <h3 className="about-second-title">
                    Skills and
                    <br />
                    Experience
                  </h3>
                </Subtitle>
                <Description>
                  <p className="about-description-content">
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
                  </p>
                </Description>
                <TechnologiesBox side="left" />
                <div className="about-console">
                  <ConsoleBox
                    title="skills"
                    height="28rem"
                    window="Small"
                    margintop="30px"
                  >
                    <ConsoleAboutPage />
                  </ConsoleBox>
                </div>
              </AboutBackgroundText>
            </div>
            <div className="page-grid-col page-grid-col--right">
              <TechnologiesBox side="right" />
              <div className="about-flex-console">
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
              </div>
            </div>
          </div>
        </div>
      </PageBackground>
    </PageHead>
  )
}
