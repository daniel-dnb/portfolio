import { useRouter } from 'next/router'
import { useContext } from 'react'
import ReactIMG from '../../assets/React.svg'
import { MenuContext } from '../../contexts/MenuContext'
import {
  CicleYellow,
  CircleGreen,
  CircleRed,
  Container,
  NavButtons,
  PageContainer,
  PageNavigation,
  PageUrl,
  TopBar,
  TopBarTitle
} from './styles'

const PageBackground: React.FC = props => {
  const router = useRouter()
  const { isMenuActive } = useContext(MenuContext)

  return (
    <Container isMenuActive={isMenuActive}>
      <TopBar>
        <NavButtons>
          <CircleRed />
          <CicleYellow />
          <CircleGreen />
        </NavButtons>
        <TopBarTitle>
          {router.pathname == '/' ? 'index.tsx' : ''}
          {router.pathname == '/projects' ? 'projects.tsx' : ''}
          {router.pathname == '/about' ? 'about.tsx' : ''}
          {router.pathname == '/contact' ? 'contact.tsx' : ''} - portfolio -
          Visual Studio Code
        </TopBarTitle>
      </TopBar>
      <PageContainer>
        <PageNavigation>
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
        </PageNavigation>

        <PageUrl>
          <span>{'src > pages > '}</span>
          <ReactIMG className="react-img-url" />
          <span>
            {router.pathname == '/' ? ' index.tsx' : ''}
            {router.pathname == '/projects' ? ' projects.tsx' : ''}
            {router.pathname == '/about' ? ' about.tsx' : ''}
            {router.pathname == '/contact' ? ' contact.tsx' : ''}
          </span>
        </PageUrl>
        {props.children}
      </PageContainer>
    </Container>
  )
}

export default PageBackground
