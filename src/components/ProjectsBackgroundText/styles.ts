import styled, { css } from 'styled-components'

type TextColorProps = {
  Color: string
}

export const BackgroundText = styled.div`
  font: italic 700 1.4rem Consolas;
  color: rgba(218, 121, 198, 0.25);
`
export const TextColor = styled.span<TextColorProps>`
  ${props =>
    props.Color === 'white' &&
    css`
      color: ${props => props.theme.colors.text};
      opacity: 0.25;
    `}
  ${props =>
    props.Color === 'blue' &&
    css`
      color: #4cbed6;
      opacity: 0.25;
    `}
  ${props =>
    props.Color === 'purple' &&
    css`
      color: ${props => props.theme.colors.purple};
      opacity: 0.25;
    `}
  ${props =>
    props.Color === 'yellow' &&
    css`
      color: #dade79;
      opacity: 0.25;
    `}
`

export const Content = styled.div``
