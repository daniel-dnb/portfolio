import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppDispatch, AppThunk } from '..'

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

interface DataProps {
  data: Props[]
  isLoading: boolean
}

const initialState: DataProps = null

export const ProjectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    loadingPost: state => {
      state.isLoading = true
    },
    setProjectsData: (state, { payload }) => {
      state.data = [...payload]
      state.isLoading = false
    }
  }
})

export function asyncSetProjects(): AppThunk {
  return async function (dispatch: AppDispatch) {
    await axios
      .get('/api/readProjects')
      .then(res => {
        dispatch(setProjectsData(res.data))
      })
      .catch(console.log)
  }
}

export const { setProjectsData, loadingPost } = ProjectsSlice.actions

export default ProjectsSlice.reducer
