import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
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
import storage from 'redux-persist/lib/storage'
import projectsReducer from './slices/projects'

const persistConfig = {
  timeout: 100,
  key: 'root',
  version: 1,
  storage
}

const persistedProjectsReducer = persistReducer(persistConfig, projectsReducer)

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
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store

export let persistor = persistStore(store)
