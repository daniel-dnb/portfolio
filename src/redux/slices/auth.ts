import { createSlice } from '@reduxjs/toolkit'

export interface AuthStateProps {
  isLoading: boolean
  isAuthenticated: boolean
  user: string | null
  error: string | null
}

const initialState: AuthStateProps = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInPending: state => {
      state.isLoading = true
    },
    signInSuccess: (state, { payload }) => {
      state.isLoading = false
      state.isAuthenticated = true
      state.user = payload
      state.error = null
    },
    signInFail: state => {
      state.isLoading = false
      state.error = 'E-mail or password invalid.'
    },
    signOut: state => {
      state.isLoading = false
      state.isAuthenticated = false
      state.error = null
    }
  }
})

export const { signInPending, signInSuccess, signInFail, signOut } =
  authSlice.actions

export default authSlice.reducer
