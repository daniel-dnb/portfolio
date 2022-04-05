import axios from 'axios'
import { NextPage } from 'next'
import Head from 'next/head'
import PageBackground from '../components/PageBackground'
import ProjectsBackgroundText from '../components/ProjectsBackgroundText'
import SliderProjects from '../components/SliderProjects'
import { wrapper } from '../redux/store'
import { setProjectsData } from '../redux/store/slices/projects'
import { Container, Title } from '../styles/pages/Projects'

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel Bernardes — Projects</title>
      </Head>

      <PageBackground>
        <Container>
          <ProjectsBackgroundText>
            <Title>Projects</Title>
            <SliderProjects />
          </ProjectsBackgroundText>
        </Container>
      </PageBackground>
    </>
  )
}

export default Projects

export const getStaticProps = wrapper.getStaticProps(store => async ctx => {
  await axios
    .get('http://localhost:3000/api/readProjects')
    .then(res => {
      store.dispatch(setProjectsData(res.data))
    })
    .catch(console.log)

  return {
    props: {}
  }
})
