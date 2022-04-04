import styled, { css } from 'styled-components'

type TextColorProps = {
  Color: string
}

type GridContainerProps = {
  Side: string
}

export const Container = styled.div`
  padding-left: 1.55vw;
  padding-top: 5px;
  user-select: none;
`

export const HomeContainer = styled.div`
  .INSIDE {
    margin-left: 3.5rem;

    @media (max-width: 768px) {
      margin-left: 2rem;
    }

    .title {
      font: 700 8rem Ubuntu, sans-serif;
      letter-spacing: -0.03em;
      line-height: 172px;
      color: ${props => props.theme.colors.text};
      animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
      span {
        color: ${props => props.theme.colors.primary};
      }
      @media (max-width: 870px) {
        font-size: 4rem;
        line-height: normal;
      }
      @media (max-width: 768px) {
        font-size: 5rem;
        line-height: normal;
      }
    }

    .subtitle {
      margin-left: 1rem;
      margin-top: 15px;
      font: 700 4rem Ubuntu, sans-serif;
      color: #989898;
      animation: text-focus-in 1s 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
        both;
      @media (max-width: 870px) {
        font-size: 2.5rem;
      }
    }

    .button {
      margin-left: 1rem;
      margin-top: 8rem;
      margin-bottom: 8rem;
      padding: 10px 45px;
      width: 220px;
      height: 50px;
      background: ${props => props.theme.colors.background2};
      border: 2px solid ${props => props.theme.colors.primary};
      font: 500 22px Ubuntu, sans-serif;
      border-radius: 10px;
      color: ${props => props.theme.colors.primary};
      animation: text-focus-in 1s 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both,
        neon 1.5s alternate infinite ease-in-out;
      :hover {
        cursor: pointer;
        animation-play-state: paused;
      }
    }

    @keyframes neon {
      from {
        filter: drop-shadow(0 0 2px ${props => props.theme.colors.primary});
      }
      to {
        filter: drop-shadow(0 0 10px ${props => props.theme.colors.primary});
      }
    }
    @keyframes text-focus-in {
      0% {
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
      }
      100% {
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
      }
    }
  }
`

export const BackgroundText = styled.div`
  font: italic 700 1.4rem Consolas;
  color: ${props => props.theme.colors.pink};
  opacity: 0.4;
`
export const TextColor = styled.span<TextColorProps>`
  ${props =>
    props.Color === 'white' &&
    css`
      color: ${props => props.theme.colors.text};
    `}
  ${props =>
    props.Color === 'blue' &&
    css`
      color: #4cbed6;
    `}
  ${props =>
    props.Color === 'purple' &&
    css`
      color: ${props => props.theme.colors.purple};
    `}
  ${props =>
    props.Color === 'yellow' &&
    css`
      color: #dade79;
    `}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: inherit;
  }
`
export const GridContainer = styled.div<GridContainerProps>`
  ${props =>
    props.Side === 'right' &&
    css`
      display: grid;
      justify-content: center;
      align-items: center;
    `}
`

export const ConsoleContainer = styled.div``
