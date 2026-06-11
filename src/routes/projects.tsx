import { createFileRoute } from '@tanstack/react-router'
import PageBackground from '../components/PageBackground'
import PageHead from '../components/PageHead'
import ProjectsBackgroundText from '../components/ProjectsBackgroundText'
import SliderProjects from '../components/SliderProjects'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
      {
        title: 'Daniel Bernardes - Projects'
      },
      {
        name: 'description',
        content:
          "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. My projects."
      },
      {
        property: 'og:title',
        content: 'Daniel Bernardes - Projects'
      }
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://www.danielbnd.com/projects'
      }
    ]
  }),
  component: Projects
})

function Projects() {
  return (
    <PageHead
      title="Daniel Bernardes - Projects"
      description="Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. My projects."
    >
      <PageBackground>
        <div className="page-container">
          <ProjectsBackgroundText>
            <h1 className="projects-title">Projects</h1>
            <SliderProjects />
          </ProjectsBackgroundText>
        </div>
      </PageBackground>
    </PageHead>
  )
}
