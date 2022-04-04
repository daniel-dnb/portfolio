import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { MenuContext } from '../../contexts/MenuContext'
import {
  Avatar,
  Container,
  Facebook,
  Github,
  Linkedin,
  Menu,
  MobileMenu,
  MobileMenuLines,
  Nav,
  SocialMedias,
  Title,
  TitleUnderline
} from './styles'

const SideBar: React.FC = () => {
  const router = useRouter()
  const { isMenuActive, activeMenu } = useContext(MenuContext)

  useEffect(() => {
    if (isMenuActive) {
      activeMenu()
    }
  }, [router.pathname])

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = 'hidden'
      return
    }
    document.body.style.overflow = ''
  }, [isMenuActive])

  return (
    <Container isMenuActive={isMenuActive}>
      <Avatar />

      <Menu>
        <Title>Daniel Bernardes</Title>
        <TitleUnderline />

        <MobileMenu
          onClick={() => activeMenu()}
          status={isMenuActive ? 'open' : 'close'}
        >
          <MobileMenuLines />
        </MobileMenu>
      </Menu>

      <Nav>
        <li className={router.pathname == '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname == '/projects' ? 'active' : ''}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={router.pathname == '/about' ? 'active' : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={router.pathname == '/contact' ? 'active' : ''}>
          <Link href="/contact">Contact</Link>
        </li>
      </Nav>

      <SocialMedias>
        <a href="https://www.linkedin.com/in/dann-bnd/" target="_blank">
          <Linkedin />
        </a>
        <a href="https://github.com/dann-bnd/" target="_blank">
          <Github />
        </a>
        <a href="https://www.facebook.com/DaNNbnd/" target="_blank">
          <Facebook />
        </a>
      </SocialMedias>
    </Container>
  )
}

export default SideBar
