import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { CircleNotch, FilePlus, LockSimple, User } from 'phosphor-react'
import { useState } from 'react'
import PageBackground from '../../components/PageBackground'
import PageHead from '../../components/PageHead'

import * as S from '../../styles/pages/Panel'

const Panel: NextPage = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [github, setGithub] = useState('')
  const [site, setSite] = useState('')
  const [imgs, setImgs] = useState([])
  const [technologies, setTechnologies] = useState([])

  const handleCreateProject = event => {
    event.preventDefault()

    const data = {
      title,
      description,
      github,
      site,
      imgs,
      technologies
    }

    console.log(event)
  }

  return (
    <PageHead title="Daniel Bernardes" description="Front-End Developer">
      <PageBackground>
        <S.Container>
          <S.LoginBox>
            <S.LoginHeader>
              <FilePlus id="user-icon" size={40} color="#40DABF" />
              <S.LoginTitle>Create new project</S.LoginTitle>
            </S.LoginHeader>
            <S.Form onSubmit={handleCreateProject}>
              <S.Input
                type="text"
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
                required
              />
              <S.TextArea
                placeholder="Description"
                onChange={e => setDescription(e.target.value)}
                required
              />
              <S.Input
                type="text"
                placeholder="Github"
                onChange={e => setGithub(e.target.value)}
              />
              <S.Input
                type="text"
                placeholder="Site"
                onChange={e => setSite(e.target.value)}
              />
              <S.Input
                type="text"
                placeholder="IMG"
                onChange={e => setImgs([...imgs, e.target.value])}
                required
              />
              <S.Input
                type="text"
                placeholder="Technologies"
                onChange={e =>
                  setTechnologies([...technologies, e.target.value])
                }
                required
              />
              <S.Error>{error}</S.Error>
              <S.Btn type="submit" disabled={isLoading}>
                {isLoading ? (
                  <CircleNotch id="circle-icon" size={24} weight="bold" />
                ) : (
                  <>
                    <LockSimple id="lock-icon" size={24} weight="bold" />
                    <span>Submit</span>
                  </>
                )}
              </S.Btn>
            </S.Form>
          </S.LoginBox>
        </S.Container>
      </PageBackground>
    </PageHead>
  )
}

export default Panel
