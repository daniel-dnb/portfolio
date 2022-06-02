import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding-left: 1.55vw;
  padding-top: 5px;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  margin-left: 2.2vw;
  font: 700 5rem Ubuntu, sans-serif;
  color: ${({ theme }) => theme.colors.primary};
`

export const LoginBox = styled.div`
  padding: 2.4rem;
  background: ${props => props.theme.colors.background2};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginHeader = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  #user-icon {
    margin-right: 8px;
  }
`

export const LoginTitle = styled.span`
  font: 700 2.4rem Ubuntu, sans-serif;
`

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

interface InputPros {
  invalidUser?: string
  invalidPassword?: string
}

export const Input = styled.input<InputPros>`
  outline: none;
  width: 48rem;
  height: 100%;
  background: ${props => props.theme.colors.background2};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 0.8rem;
  padding: 0.8rem;
  font: 600 1.6rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.text};

  ${props =>
    props.invalidUser &&
    css`
      border-color: ${props => props.theme.colors.red};
    `}

  ${props =>
    props.invalidPassword &&
    css`
      border-color: ${props => props.theme.colors.red};
    `}

  ::placeholder {
    color: #71717a;
  }
`

export const TextArea = styled.textarea`
  outline: none;
  width: 48rem;
  height: 16rem;
  background: ${props => props.theme.colors.background2};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 0.8rem;
  padding: 0.8rem;
  font: 600 1.6rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.text};
  resize: none;

  ::placeholder {
    color: #71717a;
  }
`

export const Error = styled.span`
  display: inline-block;
  margin: 0 auto;
  padding: 0.5rem 0;
  font: 700 1.5rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.red};
`

export const Btn = styled.button`
  border: none;
  outline: none;
  position: relative;
  height: 4rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  background: ${props => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  span {
    font: 600 1.8rem Ubuntu, sans-serif;
  }

  #lock-icon {
    position: absolute;
    left: 0.8rem;
  }

  #circle-icon {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
