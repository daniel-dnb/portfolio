import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ConsoleBox from '../components/ConsoleBox'
import ConsoleHomePage from '../components/ConsoleHomePage'
import { HomeBackgroundText } from '../components/HomeBackgroundText'
import PageBackground from '../components/PageBackground'
import PageHead from '../components/PageHead'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { asyncSetProjects } from '../redux/store/slices/projects'
import {
  ConsoleContainer,
  Container,
  Grid,
  GridContainer,
  HomeContainer
} from '../styles/pages/Home'

const Home: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const projects = useAppSelector((state: RootState) => state.projects.data)

  useEffect(() => {
    if (projects === undefined) {
      dispatch(asyncSetProjects())
    }
  }, [])

  return (
    <PageHead title="Daniel Bernardes" description="Front-End Developer">
      <PageBackground>
        <Container>
          <Grid>
            <GridContainer Side="left">
              <HomeBackgroundText>
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
                    <div
                      className="button"
                      onClick={() => router.push('/contact')}
                    >
                      Contact Me!
                    </div>
                    <ConsoleContainer>
                      <ConsoleBox
                        title="portfolio"
                        window="Small"
                        height="40rem"
                      >
                        <ConsoleHomePage />
                      </ConsoleBox>
                    </ConsoleContainer>
                  </div>
                </HomeContainer>
              </HomeBackgroundText>
            </GridContainer>
            <GridContainer Side="right">
              <ConsoleBox
                title="portfolio"
                width="36.5vw"
                window="Large"
                height="40rem"
              >
                <ConsoleHomePage />
              </ConsoleBox>
            </GridContainer>
          </Grid>
        </Container>
      </PageBackground>
    </PageHead>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {}
  }
}
