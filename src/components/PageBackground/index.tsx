import { useNavigate, useRouterState } from '@tanstack/react-router'
import type { ComponentType, FC, PropsWithChildren } from 'react'
import ReactIMG from '../../assets/React.svg'
import { authClient } from '../../lib/auth-client'

const PageBackground: FC<PropsWithChildren> = props => {
  const ReactIcon = ReactIMG as unknown as ComponentType<{
    className?: string
  }>
  const navigate = useNavigate()
  const pathname = useRouterState({
    select: state => state.location.pathname
  })
  const { data: session } = authClient.useSession()

  return (
    <div className="page-bg">
      <div className="page-topbar">
        <div className="page-nav-buttons">
          {session ? (
            <div
              className="traffic-light traffic-light--red"
              onClick={() => authClient.signOut()}
            />
          ) : (
            <div className="traffic-light traffic-light--red" />
          )}
          <div className="traffic-light traffic-light--yellow" />
          <div
            className="traffic-light traffic-light--green"
            onClick={() => navigate({ to: '/signin' })}
          />
        </div>
        <div className="page-topbar-title">
          {pathname == '/' ? 'index' : pathname.replace('/', '')}
          .tsx - portfolio - Visual Studio Code
        </div>
      </div>
      <div className="page-content">
        <ul className="page-tabs">
          <li className={pathname == '/' ? 'home active' : 'home'}>
            <ReactIcon className="react-img" />
            <span>index.tsx</span>
          </li>
          <li
            className={
              pathname == '/projects' ? 'projects active' : 'projects'
            }
          >
            <ReactIcon className="react-img" />
            <span>projects.tsx</span>
          </li>
          <li
            className={pathname == '/about' ? 'about active' : 'about'}
          >
            <ReactIcon className="react-img" />
            <span>about.tsx</span>
          </li>
          <li
            className={
              pathname == '/contact' ? 'contact active' : 'contact'
            }
          >
            <ReactIcon className="react-img" />
            <span>contact.tsx</span>
          </li>
        </ul>

        <div className="page-url">
          <span>{'src > pages > '}</span>
          <ReactIcon className="react-img-url" />
          <span>
            {pathname == '/' ? ' index.tsx' : ''}
            {pathname == '/projects' ? ' projects.tsx' : ''}
            {pathname == '/about' ? ' about.tsx' : ''}
            {pathname == '/contact' ? ' contact.tsx' : ''}
          </span>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default PageBackground
