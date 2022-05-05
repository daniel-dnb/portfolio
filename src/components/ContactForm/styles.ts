import { Field } from 'formik'
import styled from 'styled-components'

export const Input = styled(Field)`
  outline: none;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  font: 500 18px Roboto, sans-serif;
  margin: 1rem 0;
  padding: 16px 20px;
  width: 100%;
  height: 45px;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background};
  border-radius: 10px;
  border-bottom: 0;

  ::placeholder {
    font: 600 18px Ubuntu, sans-serif;
    color: #71717a;
  }
`

export const BottomBar = styled.div`
  position: relative;

  .bottom-bar {
    position: absolute;
    margin-top: -16px;
    height: 6px;
    width: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .name-active {
    background: ${props => props.theme.colors.primary};
    animation: animationBar 0.3s ease-in-out forwards;
  }
  .name-red {
    background: tomato;
  }

  .email-active {
    background: ${props => props.theme.colors.primary};
    animation: animationBar 0.3s ease-in-out forwards;
  }
  .email-red {
    background: tomato;
  }

  .subject-active {
    background: ${props => props.theme.colors.primary};
    animation: animationBar 0.3s ease-in-out forwards;
  }
  .subject-red {
    background: tomato;
  }

  .message-active {
    background: ${props => props.theme.colors.primary};
    animation: animationBar 0.3s ease-in-out forwards;
  }
  .message-red {
    background: tomato;
  }

  @keyframes animationBar {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  .text-area {
    height: 140px;
    resize: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`

export const Btn = styled.button`
  width: 100%;
  height: 50px;
  margin: 8px 0;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  font: 600 1.8rem Roboto, sans-serif;

  :hover {
    cursor: pointer;
    transform: scale(1.009);
    animation: activeButtonAnimation 0.5s ease-in-out infinite;
  }

  :active {
    animation-play-state: paused;
    transform: scale(1.02);
  }

  @keyframes activeButtonAnimation {
    0% {
      box-shadow: 0 0 5px ${props => props.theme.colors.primary},
        inset 0 0 5px ${props => props.theme.colors.primary};
    }
    50% {
      box-shadow: 0 0 3px ${props => props.theme.colors.primary},
        inset 0 0 3px ${props => props.theme.colors.primary};
    }
    100% {
      box-shadow: 0 0 6px ${props => props.theme.colors.primary},
        inset 0 0 6px ${props => props.theme.colors.primary};
    }
  }
`
