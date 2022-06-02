import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import SEO from '../../next-seo-config'
import SideBar from '../components/SideBar'
import { MenuProvider } from '../contexts/MenuContext'
import store from '../redux/store'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { SessionProvider } from 'next-auth/react'

let persistor = persistStore(store)

Router.events.on('routeChangeStart', url => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', url => {
  NProgress.done()
})

Router.events.on('routeChangeError', url => {
  NProgress.done()
})

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MenuProvider>
            <ThemeProvider theme={theme}>
              <DefaultSeo {...SEO} />
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
              </Head>
              <SideBar />
              <Component {...pageProps} />
              <GlobalStyle />
            </ThemeProvider>
          </MenuProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
