import styled from 'styled-components'

interface ContainerType {
  width: string
  window: string
  margintop?: string
}

interface ContainerType2 {
  width: string
  height?: string
}

export const Container = styled.div<ContainerType>`
  width: ${props => props.width};
  display: ${props => (props.window === 'Large' ? 'block' : 'none')};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 1545px) {
    width: 60vw;
    display: ${props => (props.window === 'Small' ? 'block' : 'none')};
    margin-bottom: 5rem;
    margin-top: ${props => props.margintop && props.margintop};
  }
  @media (max-width: 950px) {
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 88vw;
  }
  @media (max-width: 350px) {
    width: 90vw;
  }
`
export const BoxContainer = styled.div<ContainerType2>`
  width: 100%;
  height: ${props => props.height};
  border-radius: 0px 0px 10px 10px;
  border: 1px solid ${props => props.theme.colors.purple};
  border-top: 0;
  padding-top: 15px;
  padding-left: 15px;
`

export const TitleBox = styled.div<ContainerType2>`
  width: 100%;
  height: 30px;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.purple};
  border-bottom: 0;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ControlButtons = styled.div`
  display: flex;
  flex-direction: row;
`

export const Red = styled.div`
  width: 13px;
  height: 13px;
  background: #ff474c;
  border-radius: 50%;
  margin-left: 6px;
  margin-right: 6px;
`

export const Yellow = styled.div`
  width: 13px;
  height: 13px;
  background: #eeff5a;
  border-radius: 50%;
  margin-right: 6px;
`

export const Green = styled.div`
  width: 13px;
  height: 13px;
  background: #4ef979;
  border-radius: 50%;
`

export const TitleBoxTitle = styled.div`
  font: 400 15px Ubuntu, sans-serif;
  color: ${props => props.theme.colors.text};
  margin: 0 auto;
`
