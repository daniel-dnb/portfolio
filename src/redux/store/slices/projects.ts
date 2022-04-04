import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from '..'

interface TechnologiesProps {
  name: string
  url: string
  alt: string
}

interface Props {
  key: string
  title: string
  description: string
  github?: string
  site?: string
  imgs: string[]
  technologies: TechnologiesProps[]
}

interface initialStateProps {
  projects: Props[]
}

const initialState: initialStateProps = {
  projects: [
    {
      key: null,
      title: null,
      description: null,
      github: null,
      site: null,
      imgs: [null],
      technologies: [null]
    }
  ]
}

export const ProjectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjectsData: (state, { payload }) => {
      return payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      if (!payload) {
        return state
      }
      return payload
    }
  }
})

export const { setProjectsData } = ProjectsSlice.actions

export const selectProjects = (state: AppState) => state

export default ProjectsSlice.reducer
