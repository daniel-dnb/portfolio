import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import type { Persistor } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import SideBar from '../components/SideBar'
import { MenuProvider } from '../contexts/MenuContext'
import store, { createPersistor } from '../redux/store'

type AppProvidersProps = {
  children: ReactNode
}

function ClientPersistGate({ children }: AppProvidersProps) {
  const [persistor, setPersistor] = useState<Persistor | null>(null)

  useEffect(() => {
    setPersistor(createPersistor())
  }, [])

  if (!persistor) {
    return <>{children}</>
  }

  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  )
}

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <Provider store={store}>
      <ClientPersistGate>
        <MenuProvider>
          <SideBar />
          {children}
        </MenuProvider>
      </ClientPersistGate>
    </Provider>
  )
}
