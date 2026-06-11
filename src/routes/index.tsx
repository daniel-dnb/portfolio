import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import ConsoleBox from '../components/ConsoleBox'
import ConsoleHomePage from '../components/ConsoleHomePage'
import { HomeBackgroundText } from '../components/HomeBackgroundText'
import PageBackground from '../components/PageBackground'
import PageHead from '../components/PageHead'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { asyncSetProjects, DataProps } from '../redux/slices/projects'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Daniel Bernardes'
      },
      {
        name: 'description',
        content:
          "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer."
      },
      {
        property: 'og:title',
        content: 'Daniel Bernardes'
      },
      {
        property: 'og:description',
        content:
          "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer."
      }
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://www.danielbnd.com/'
      }
    ]
  }),
  component: Home
})

function Home() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const projects: DataProps = useAppSelector(
    (state: RootState) => state.projects
  )

  useEffect(() => {
    if (projects.data === undefined) {
      dispatch(asyncSetProjects())
    }
  }, [dispatch, projects.data])

  return (
    <PageHead
      title="Daniel Bernardes"
      description="Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer."
    >
      <PageBackground>
        <div className="page-container">
          <div className="page-grid">
            <div className="page-grid-col">
              <HomeBackgroundText>
                <div className="home-container">
                  <div className="INSIDE">
                    <div className="home-title">
                      <h1>
                        Hi,
                        <br />
                        I&apos;m <span>Daniel</span>
                      </h1>
                    </div>
                    <div className="home-subtitle">
                      I&apos;m a Brazilian frontend developer.
                    </div>
                    <div
                      className="home-cta"
                      onClick={() => navigate({ to: '/contact' })}
                    >
                      Contact Me!
                    </div>
                    <div className="home-console">
                      <ConsoleBox
                        title="portfolio"
                        window="Small"
                        height="40rem"
                      >
                        <ConsoleHomePage />
                      </ConsoleBox>
                    </div>
                  </div>
                </div>
              </HomeBackgroundText>
            </div>
            <div className="page-grid-col page-grid-col--right">
              <ConsoleBox
                title="portfolio"
                width="36.5vw"
                window="Large"
                height="40rem"
              >
                <ConsoleHomePage />
              </ConsoleBox>
            </div>
          </div>
        </div>
      </PageBackground>
    </PageHead>
  )
}
