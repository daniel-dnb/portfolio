import { Link, useRouterState } from '@tanstack/react-router'
import type { ComponentType, FC, SVGProps } from 'react'
import { useContext, useEffect, useState } from 'react'
import GithubSVG from '../../assets/Github.svg'
import InstagramSVG from '../../assets/Instagram.svg'
import LinkedinSVG from '../../assets/Linkedin.svg'
import { MenuContext } from '../../contexts/MenuContext'
import { cn } from '../../lib/cn'

const Linkedin = LinkedinSVG as unknown as ComponentType<
  SVGProps<SVGSVGElement>
>
const Github = GithubSVG as unknown as ComponentType<SVGProps<SVGSVGElement>>
const Instagram = InstagramSVG as unknown as ComponentType<
  SVGProps<SVGSVGElement>
>

const SideBar: FC = () => {
  const pathname = useRouterState({
    select: state => state.location.pathname
  })
  const { isMenuActive, activeMenu } = useContext(MenuContext)
  const [isNavBarShowing, setIsNavBarShowing] = useState(true)

  useEffect(() => {
    if (isMenuActive) {
      activeMenu()
    }
  }, [pathname])

  useEffect(() => {
    if (isMenuActive) {
      document.body.style.overflow = 'hidden'
      return
    }
    document.body.style.overflow = ''
  }, [isMenuActive])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

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

    window.addEventListener('scroll', changeSize)
    return () => {
      window.removeEventListener('scroll', changeSize)
    }
  }, [])

  return (
    <div
      className={cn(
        'sidebar',
        isMenuActive && 'sidebar--open',
        !isNavBarShowing && 'sidebar--hidden'
      )}
    >
      <div className="sidebar-avatar">
        <img
          src="/avatar.png"
          alt="Avatar picture"
          width={200}
          height={200}
        />
      </div>

      <div className="sidebar-menu">
        <h1 className="sidebar-title">Daniel Bernardes</h1>
        <div className="sidebar-title-underline" />

        <div
          className={cn(
            'sidebar-mobile-menu',
            isMenuActive && 'sidebar-mobile-menu--open'
          )}
          onClick={() => activeMenu()}
        >
          <div className="sidebar-mobile-lines" />
        </div>
      </div>

      <ul className="sidebar-nav">
        <li className={pathname == '/' ? 'active' : ''}>
          <span onClick={() => activeMenu()}>
            <Link to="/">Home</Link>
          </span>
        </li>
        <li className={pathname == '/projects' ? 'active' : ''}>
          <span onClick={() => activeMenu()}>
            <Link to="/projects">Projects</Link>
          </span>
        </li>
        <li className={pathname == '/about' ? 'active' : ''}>
          <span onClick={() => activeMenu()}>
            <Link to="/about">About</Link>
          </span>
        </li>
        <li className={pathname == '/contact' ? 'active' : ''}>
          <span onClick={() => activeMenu()}>
            <Link to="/contact">Contact</Link>
          </span>
        </li>
      </ul>

      <div className="sidebar-social">
        <a href="https://www.linkedin.com/in/daniel-dnb/" target="_blank">
          <Linkedin className="sidebar-social-icon" />
        </a>
        <a href="https://github.com/daniel-dnb/" target="_blank">
          <Github className="sidebar-social-icon" />
        </a>
        <a href="https://www.instagram.com/dann_dnb/" target="_blank">
          <Instagram className="sidebar-social-icon" />
        </a>
      </div>
    </div>
  )
}

export default SideBar
