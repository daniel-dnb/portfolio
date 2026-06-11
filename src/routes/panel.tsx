import { createFileRoute, redirect } from '@tanstack/react-router'
import { CircleNotch, FilePlus, LockSimple } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import PageBackground from '../components/PageBackground'
import PageHead from '../components/PageHead'
import { getSession } from '../lib/session'

export const Route = createFileRoute('/panel')({
  beforeLoad: async () => {
    const session = await getSession()

    if (!session?.user || session.user.role !== 'ADMIN') {
      throw redirect({ to: '/signin' })
    }
  },
  head: () => ({
    meta: [
      {
        title: 'Daniel Bernardes - Panel'
      },
      {
        name: 'description',
        content:
          "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer."
      }
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://www.danielbnd.com/panel'
      }
    ]
  }),
  component: Panel
})

function Panel() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [github, setGithub] = useState('')
  const [site, setSite] = useState('')
  const [imgs, setImgs] = useState<string[]>([])
  const [technologies, setTechnologies] = useState<string[]>([])

  const handleCreateProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    const response = await fetch('/api/admin/createProject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        github,
        site,
        imgs,
        technologies: technologies.map(technology => ({
          name: technology,
          alt: technology,
          url: ''
        }))
      })
    })

    if (!response.ok) {
      setError('Something went wrong')
    }

    setIsLoading(false)
  }

  return (
    <PageHead
      title="Daniel Bernardes"
      description="Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer."
    >
      <PageBackground>
        <div className="panel-container">
          <div className="panel-box">
            <header className="panel-header">
              <FilePlus id="user-icon" size={40} color="#40DABF" />
              <span className="panel-title">Create new project</span>
            </header>
            <form className="panel-form" onSubmit={handleCreateProject}>
              <input
                className="panel-input"
                type="text"
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
                required
              />
              <textarea
                className="panel-textarea"
                placeholder="Description"
                onChange={e => setDescription(e.target.value)}
                required
              />
              <input
                className="panel-input"
                type="text"
                placeholder="Github"
                onChange={e => setGithub(e.target.value)}
              />
              <input
                className="panel-input"
                type="text"
                placeholder="Site"
                onChange={e => setSite(e.target.value)}
              />
              <input
                className="panel-input"
                type="text"
                placeholder="IMG"
                onChange={e => setImgs([...imgs, e.target.value])}
                required
              />
              <input
                className="panel-input"
                type="text"
                placeholder="Technologies"
                onChange={e =>
                  setTechnologies([...technologies, e.target.value])
                }
                required
              />
              <span className="panel-error">{error}</span>
              <button className="panel-btn" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <CircleNotch id="circle-icon" size={24} weight="bold" />
                ) : (
                  <>
                    <LockSimple id="lock-icon" size={24} weight="bold" />
                    <span>Submit</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </PageBackground>
    </PageHead>
  )
}
