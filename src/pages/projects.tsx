import { NextPage } from 'next'
import PageBackground from '../components/PageBackground'
import PageHead from '../components/PageHead'
import ProjectsBackgroundText from '../components/ProjectsBackgroundText'
import SliderProjects from '../components/SliderProjects'
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
