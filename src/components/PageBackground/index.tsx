import { useRouter } from 'next/router'
import { useContext } from 'react'

import { MenuContext } from '../../contexts/MenuContext'

import ReactIMG from '../../assets/React.svg'
import { Container } from './PageBackground'

const PageBackground: React.FC = props => {
  const router = useRouter()
  const { isMenuActive } = useContext(MenuContext)

  return (
    <Container isMenuActive={isMenuActive}>
      <div className="title-box">
        <div className="control-buttons">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <div className="title-box-title">
          index.tsx - portfolio - Visual Studio Code
        </div>
      </div>
      <div className="container">
        <ul className="page-navigation">
          <li className={router.pathname == '/' ? 'home active' : 'home'}>
            <ReactIMG className="react-img" />
            <span>index.tsx</span>
          </li>
          <li
            className={
              router.pathname == '/projects' ? 'projects active' : 'projects'
            }
          >
            <ReactIMG className="react-img" />
            <span>projects.tsx</span>
          </li>
          <li
            className={router.pathname == '/about' ? 'about active' : 'about'}
          >
            <ReactIMG className="react-img" />
            <span>about.tsx</span>
          </li>
          <li
            className={
              router.pathname == '/contact' ? 'contact active' : 'contact'
            }
          >
            <ReactIMG className="react-img" />
            <span>contact.tsx</span>
          </li>
        </ul>

        <div className="page-url">
          <span>{'src > pages > '}</span>
          <ReactIMG className="react-img-url" />
          <span>
            {router.pathname == '/' ? ' index.tsx' : ''}
            {router.pathname == '/projects' ? ' projects.tsx' : ''}
            {router.pathname == '/about' ? ' about.tsx' : ''}
            {router.pathname == '/contact' ? ' contact.tsx' : ''}
          </span>
        </div>
        {props.children}
      </div>
    </Container>
  )
}

export default PageBackground
