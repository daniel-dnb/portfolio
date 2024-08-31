import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../../contexts/MenuContext'
import {
  Avatar,
  Container,
  Github,
  Instagram,
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
  const [isNavBarShowing, setIsNavBarShowing] = useState(true)

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

  if (typeof window !== 'undefined') {
    let scrollPos = 0
    const changeSize = () => {
      if (document.body.getBoundingClientRect().top > scrollPos) {
        scrollPos = document.body.getBoundingClientRect().top
        setIsNavBarShowing(true)
        return
      } else {
        scrollPos = document.body.getBoundingClientRect().top
        setIsNavBarShowing(false)
        return
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', changeSize)
      return () => {
        window.removeEventListener('scroll', changeSize)
      }
    }, [])
  }

  return (
    <Container isMenuActive={isMenuActive} isNavBarShowing={isNavBarShowing}>
      <Avatar>
        <Image
          src="/avatar.png"
          alt="Avatar picture"
          width={200}
          height={200}
        />
      </Avatar>

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
          <span onClick={() => activeMenu()}>
            <Link href="/">Home</Link>
          </span>
        </li>
        <li className={router.pathname == '/projects' ? 'active' : ''}>
          <span onClick={() => activeMenu()}>
            <Link href="/projects">Projects</Link>
          </span>
        </li>
        <li className={router.pathname == '/about' ? 'active' : ''}>
          <span onClick={() => activeMenu()}>
            <Link href="/about">About</Link>
          </span>
        </li>
        <li className={router.pathname == '/contact' ? 'active' : ''}>
          <span onClick={() => activeMenu()}>
            <Link href="/contact">Contact</Link>
          </span>
        </li>
      </Nav>

      <SocialMedias>
        <a href="https://www.linkedin.com/in/daniel-dnb/" target="_blank">
          <Linkedin />
        </a>
        <a href="https://github.com/daniel-dnb/" target="_blank">
          <Github />
        </a>
        <a href="https://www.instagram.com/dann_dnb/" target="_blank">
          <Instagram />
        </a>
      </SocialMedias>
    </Container>
  )
}

export default SideBar
