import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 100vh;
  padding-top: 60px;
  position: fixed;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};

  h1 {
    font: 700 28px Arvo, sans-serif;
    margin-top: 25px;
    color: ${props => props.theme.colors.primary};
  }
  .h1--sublinhado {
    width: 200px;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
  }

  .navigation {
    margin-top: 120px;
    width: 300px;
    text-align: center;
  }
  .navigation li {
    list-style-type: none;
    font: 500 25px Ubunto, sans-serif;
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
    margin-top: 120px;
    width: 160px;
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
`
