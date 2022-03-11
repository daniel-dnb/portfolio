import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

import { MenuProvider } from '../contexts/MenuContext'
import SideBar from '../components/SideBar'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MenuProvider>
      <ThemeProvider theme={theme}>
        <SideBar />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </MenuProvider>
  )
}

export default MyApp
