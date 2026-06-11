import {
  Action,
  configureStore,
  ThunkAction,
  ThunkDispatch,
  UnknownAction
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import projectsReducer from './slices/projects'

function createStorage() {
  if (typeof window === 'undefined') {
    return {
      getItem: (_key: string) => Promise.resolve(null),
      setItem: (_key: string, value: string) => Promise.resolve(value),
      removeItem: (_key: string) => Promise.resolve()
    }
  }

  return {
    getItem: (key: string) => Promise.resolve(window.localStorage.getItem(key)),
    setItem: (key: string, value: string) => {
      window.localStorage.setItem(key, value)
      return Promise.resolve(value)
    },
    removeItem: (key: string) => {
      window.localStorage.removeItem(key)
      return Promise.resolve()
    }
  }
}

const persistedProjectsConfig = {
  timeout: 100,
  key: 'projects',
  version: 1,
  storage: createStorage()
}

const persistedProjectsReducer = persistReducer(
  persistedProjectsConfig,
  projectsReducer
)

export const store = configureStore({
  reducer: {
    projects: persistedProjectsReducer
  },
  devTools: false,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store

export const createPersistor = () => persistStore(store)
