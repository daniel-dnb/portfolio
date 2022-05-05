import styled from 'styled-components'

interface ContainerType {
  isMenuActive: boolean
}

export const TopBar = styled.div`
  width: 100%;
  height: 30px;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.purple};
  border-bottom: 0;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TopBarTitle = styled.div`
  font: 400 15px Ubuntu, sans-serif;
  color: ${props => props.theme.colors.text};
  margin: 0 auto;
`

export const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;

  @media (max-width: 450px) {
    position: relative;
  }
`

export const CircleRed = styled.div`
  width: 13px;
  height: 13px;
  background: #ff474c;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 6px;

  &:hover {
    cursor: pointer;
  }
`

export const CicleYellow = styled.div`
  width: 13px;
  height: 13px;
  background: #eeff5a;
  border-radius: 50%;
  margin-right: 6px;
`

export const CircleGreen = styled.div`
  width: 13px;
  height: 13px;
  background: #4ef979;
  border-radius: 50%;
`

export const PageContainer = styled.div`
  width: 100vw - 300px;
  min-height: 96.8vh;
  border-radius: 0px 0px 5px 5px;
  border: 1px solid ${props => props.theme.colors.purple};
  border-top: 0;
  padding-bottom: 15px;
`

export const PageNavigation = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw - 300px;
  height: 30px;
  background: #232323;
  list-style: none;
  li {
    font: italic 400 15px Ubuntu, sans-serif;
    text-align: center;
    padding-top: 6px;
    height: 30px;
    width: 100px;
    background: #232323;
    span {
      color: ${props => props.theme.colors.purple};
      filter: opacity(0.5);
      margin-left: 4px;
    }
  }
  .active {
    border-top: 1px solid ${props => props.theme.colors.purple};
    padding-top: 5px;
    background: ${props => props.theme.colors.background2};
    .react-img {
      filter: brightness(100);
    }
    span {
      color: ${props => props.theme.colors.text};
      filter: opacity(100);
    }
  }
  .home {
    width: 100px;
  }
  .projects {
    width: 115px;
  }
  .about {
    width: 100px;
  }
  .contact {
    width: 110px;
  }
`

export const PageUrl = styled.div`
  padding-left: 20px;
  padding-bottom: 4px;
  margin-top: 1px;
  border-bottom: 1px solid #1b1b1b;
  span {
    color: ${props => props.theme.colors.purple};
    font: 400 15px Ubuntu, sans-serif;
    opacity: 0.5;
  }
  .react-img-url {
    transform: scale(1.4);
    margin: 0 4px;
  }
`

export const Container = styled.div<ContainerType>`
  width: 100vw - 300px;
  min-height: 100vh;
  overflow-y: hidden;
  margin-left: 300px;

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: 356px;
    padding-top: 80px;
    margin-left: 0;
  }
`
