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

const initialState: initialStateProps = null

export const ProjectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjectsData: (state, { payload }) => {
      return (state = payload)
    }
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      if (!payload.projects) {
        return state
      }
      return (state = payload)
    }
  }
})

export const { setProjectsData } = ProjectsSlice.actions

export const selectProjects = (state: AppState) => state

export default ProjectsSlice.reducer
