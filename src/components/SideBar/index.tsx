import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Avatar from '../../assets/avatar.svg'
import Facebook from '../../assets/Facebook.svg'
import Github from '../../assets/Github.svg'
import Linkedin from '../../assets/Linkedin.svg'
import { MenuContext } from '../../contexts/MenuContext'
import { Container } from './SideBar'

const SideBar: React.FC = () => {
  const router = useRouter()
  const { isMenuActive, activeMenu } = useContext(MenuContext)

  useEffect(() => {
    if (isMenuActive) {
      activeMenu()
    }
  }, [router.pathname])

  return (
    <Container isMenuActive={isMenuActive}>
      <div className="avatar">
        <Avatar />
      </div>

      <div className="menu">
        <h1>Daniel Bernardes</h1>
        <div className="h1-sublinhado" />

        <div className="mobile-menu" onClick={() => activeMenu()}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>

      <ul className="navigation">
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
      </ul>

      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/dann-bnd/" target="_blank">
          <Linkedin />
        </a>
        <a href="https://github.com/dann-bnd/" target="_blank">
          <Github />
        </a>
        <a href="https://www.facebook.com/DaNNbnd/" target="_blank">
          <Facebook />
        </a>
      </div>
    </Container>
  )
}

export default SideBar
