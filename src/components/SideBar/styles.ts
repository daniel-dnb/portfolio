import Link from 'next/link'
import styled, { css } from 'styled-components'
import GithubSVG from '../../assets/Github.svg'
import InstagramSVG from '../../assets/Instagram.svg'
import LinkedinSVG from '../../assets/Linkedin.svg'

type ContainerProps = {
  isMenuActive: boolean
  isNavBarShowing: boolean
}

type MobileMenuProps = {
  status: string
}

export const Avatar = styled.div`
  margin-top: 60px;
  position: relative;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font: 700 2.8rem Arvo, sans-serif;
  margin-top: 2.5rem;
  color: ${props => props.theme.colors.primary};
`

export const TitleUnderline = styled.div`
  width: 200px;
  height: 2px;
  background-color: ${props => props.theme.colors.primary};
`

export const MobileMenuLines = styled.div`
  width: 32px;
  height: 2px;
  background: ${props => props.theme.colors.primary};
  box-shadow: 0 2px 5px rgba(64, 218, 191, 0.2);
  transition: all 0.5s ease-in-out;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 32px;
    height: 2px;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 2px 5px rgba(64, 218, 191, 0.2);
    transition: all 0.5s ease-in-out;
  }
  &:before {
    transform: translateY(-10px);
  }
  &:after {
    transform: translateY(10px);
  }
`

export const MobileMenu = styled.div<MobileMenuProps>`
  display: none;
  width: 50px;
  height: 31px;
  transition: all 0.5s ease-in-out;
  ${props =>
    props.status === 'open' &&
    css`
      transform: translateX(31px);
      background: transparent;
      box-shadow: none;
      width: 80px;
      ${MobileMenuLines} {
        transform: translateX(31px);
        background: transparent;
        box-shadow: none;
        &:before {
          transform: rotate(45deg) translate(-35px, 35px);
        }
        &:after {
          transform: rotate(-45deg) translate(-35px, -35px);
        }
      }
    `}
`

export const Nav = styled.ul`
  margin-top: 120px;
  width: 300px;
  text-align: center;
  li {
    list-style-type: none;
    font: 400 24px Ubuntu, sans-serif;
    padding-top: 13px;
    padding-bottom: 13px;
    border-top: 1px solid #313131;
    border-bottom: 1px solid #313131;
    :nth-child(1) {
      border-top: 2px solid #313131;
    }
    :nth-child(4) {
      border-bottom: 2px solid #313131;
    }
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.text};
      transition: 0.3s;
      :hover {
        color: ${props => props.theme.colors.primary};
        filter: brightness(0.9);
      }
    }
  }
  .active {
    a {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const LinkStyled = styled(Link)``

export const SocialMedias = styled.div`
  width: 160px;
  margin-top: 120px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  a:hover path {
    fill: ${props => props.theme.colors.primary};
  }
`

export const Linkedin = styled(LinkedinSVG)`
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.15, 1.15);
  }
`
export const Github = styled(GithubSVG)`
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.15, 1.15);
  }
`
export const Instagram = styled(InstagramSVG)`
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.15, 1.15);
  }
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 100vh;
  position: absolute;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};

  @media (max-width: 768px) {
    position: fixed;
    width: 100vw;
    min-width: 356px;
    height: ${props => (props.isMenuActive ? '100vh' : '80px')};
    transition: height 0.8s ease-in-out, opacity 0.5s ease-in;
    overflow: hidden;
    z-index: 9;

    ${props =>
      props.isNavBarShowing &&
      css`
        opacity: 1;
      `};
    ${props =>
      !props.isNavBarShowing &&
      css`
        opacity: 0;
      `};

    ${Menu} {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: center;
      padding-left: 5%;
      padding-right: 4vw;
    }
    ${Avatar} {
      display: none;
      margin-top: 0;
    }
    ${Title} {
      margin-top: 0;
      width: 100%;
      font-size: 3.9rem;
    }
    ${TitleUnderline} {
      display: none;
    }
    ${MobileMenu} {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ${Nav} {
      margin-top: 170px;
      min-width: 100%;
      align-items: center;
    }
    ${SocialMedias} {
      margin-top: 170px;
    }
  }
`
