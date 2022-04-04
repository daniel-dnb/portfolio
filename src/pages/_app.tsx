import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'
import SideBar from '../components/SideBar'
import { MenuProvider } from '../contexts/MenuContext'
import { wrapper } from '../redux/store'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

Router.events.on('routeChangeStart', url => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', url => {
  NProgress.done()
})

Router.events.on('routeChangeError', url => {
  NProgress.done()
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MenuProvider>
      <ThemeProvider theme={theme}>
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
  )
}

export default wrapper.withRedux(MyApp)
