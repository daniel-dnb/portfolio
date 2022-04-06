import axios from 'axios'
import { NextPage } from 'next'
import PageBackground from '../components/PageBackground'
import PageHead from '../components/PageHead'
import ProjectsBackgroundText from '../components/ProjectsBackgroundText'
import SliderProjects from '../components/SliderProjects'
import { wrapper } from '../redux/store'
import { setProjectsData } from '../redux/store/slices/projects'
import { Container, Title } from '../styles/pages/Projects'

const Projects: NextPage = () => {
  return (
    <PageHead title="Daniel Bernardes — Projects" description="My projects">
      <PageBackground>
        <Container>
          <ProjectsBackgroundText>
            <Title>Projects</Title>
            <SliderProjects />
          </ProjectsBackgroundText>
        </Container>
      </PageBackground>
    </PageHead>
  )
}

export default Projects

export const getServerSideProps = wrapper.getServerSideProps(
  store => async ctx => {
    await axios
      .get(`${process.env.HOST}/api/readProjects`)
      .then(res => {
        store.dispatch(setProjectsData(res.data))
      })
      .catch(e => console.log({ error: 'Something is wrong' }))

    return {
      props: {}
    }
  }
)
