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
  data: [Props]
  isLoading: boolean
  error: boolean
}

const initialState: DataProps = {
  data: [
    {
      key: '',
      title: '',
      description: '',
      imgs: [],
      technologies: []
    }
  ],
  isLoading: false,
  error: false
}

export const ProjectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    loadingPending: state => {
      state.isLoading = true
      state.error = false
    },
    loadingSuccess: state => {
      state.isLoading = false
      state.error = false
    },
    loadingFail: state => {
      state.isLoading = false
      state.error = true
    },
    setProjectsData: (state, { payload }) => {
      state.data = payload
    }
  }
})

export function asyncSetProjects(): AppThunk {
  return async function (dispatch: AppDispatch) {
    dispatch(loadingPending())
    await axios
      .get('/api/readProjects')
      .then(res => {
        dispatch(setProjectsData(res.data))
        dispatch(loadingSuccess())
      })
      .catch(err => dispatch(loadingFail()))
  }
}

export const { setProjectsData, loadingPending, loadingSuccess, loadingFail } =
  ProjectsSlice.actions

export default ProjectsSlice.reducer
