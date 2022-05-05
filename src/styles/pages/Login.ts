import styled from 'styled-components'

export const Container = styled.div`
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

export const Title = styled.h1`
  margin-left: 2.2vw;
  font: 700 5rem Ubuntu, sans-serif;
  color: ${({ theme }) => theme.colors.primary};
`

export const Content = styled.div`
  min-height: 100vh;
  border-left: 1px solid ${props => props.theme.colors.purple};
  background: ${props => props.theme.colors.background};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font: 600 1.6rem Ubuntu, sans-serif;
`

export const Form = styled.form`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Input = styled.input`
  outline: none;
  width: 24rem;
  height: 100%;
  background: ${props => props.theme.colors.background2};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 0.8rem;
  padding: 0.8rem;
  font: 600 1.6rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.text};

  ::placeholder {
    color: #71717a;
  }
`

export const Btn = styled.button`
  border: none;
  outline: none;
  position: relative;
  background: ${props => props.theme.colors.primary};
  padding: 0.8rem;
  border-radius: 0.8rem;

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
`
