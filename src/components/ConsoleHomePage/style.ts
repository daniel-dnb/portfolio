import styled, { css } from 'styled-components'

type ConsoleTextColorProps = {
  Color: string
  Font?: boolean
}

export const ConsoleText = styled.div`
  font: 400 1.4rem/138% 'Lucida Console';
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

export const ConsoleTextColor = styled.span<ConsoleTextColorProps>`
  ${props =>
    props.Color === 'green' &&
    css`
      color: #64d792;
    `}
  ${props =>
    props.Color === 'pink' &&
    css`
      color: #d17ca5;
      text-decoration: underline;
    `}
  ${props =>
    props.Color === 'purple' &&
    css`
      color: #6a5b95;
    `}
  ${props =>
    props.Color === 'yellow' &&
    css`
      color: #c3c96e;
    `}
  ${props =>
    props.Color === 'red' &&
    css`
      color: #f25c54;
    `}
  ${props =>
    props.Color === 'grey' &&
    css`
      font-size: 1.3rem;
      color: #686868;
    `}
  ${props =>
    props.Color === 'white' &&
    css`
      font: 700 1.4rem/100% Consolas;
    `}
    ${props =>
    props.Font === true &&
    css`
      font: 800 1.4rem/138% NanumGothic, sans-serif;
    `}
`
