import styled from 'styled-components'

interface ContainerType {
  isMenuActive: boolean
}

export const Container = styled.div<ContainerType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 100vh;
  position: fixed;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};

  h1 {
    font: 700 2.8rem Arvo, sans-serif;
    margin-top: 2.5rem;
    color: ${props => props.theme.colors.primary};
  }
  .h1-sublinhado {
    width: 200px;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mobile-menu {
    cursor: pointer;
    display: none;
  }

  .mobile-menu div {
    width: 32px;
    height: 2px;
    background: ${props => props.theme.colors.primary};
    margin: 8px;
  }

  .avatar {
    margin-top: 60px;
  }

  .navigation {
    margin-top: 120px;
    width: 300px;
    text-align: center;
  }
  .navigation li {
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
  .navigation .active {
    a {
      color: ${props => props.theme.colors.primary};
    }
  }

  .socialMedia {
    width: 160px;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    a {
      height: 25px;
      width: 25px;
    }
    a:hover path {
      fill: ${props => props.theme.colors.primary};
    }
  }

  @media (max-width: 850px) {
    position: stick;
    width: 100vw;
    min-width: 356px;
    height: ${props => (props.isMenuActive ? '100vh' : '80px')};
    transition: height 0.8s ease-in-out;
    overflow: hidden;
    z-index: 9;

    .menu {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: center;
      padding-left: 5%;
      padding-right: 4vw;
      h1 {
        margin-top: 0;
        width: 100%;
        font-size: 3.9rem;
      }
      .h1-sublinhado {
        display: none;
      }
    }

    .mobile-menu {
      display: block;
    }

    .avatar {
      display: none;
    }

    .navigation {
      margin-top: 170px;
      min-width: 100%;
      align-items: center;
    }

    .navigation li {
    }

    .socialMedia {
      margin-top: 170px;
    }
  }
`
