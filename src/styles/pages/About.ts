import styled, { css } from 'styled-components'

type TextColorProps = {
  Color: string
}

type GridContainerProps = {
  Side: string
}

export const Container = styled.div`
  padding-left: 3rem;
  padding-top: 5px;
  user-select: none;
`

export const TitleContent = styled.h2`
  font: 700 5rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.primary};
  margin: 3px 0 3px 60px;

  @media (max-width: 768px) {
    margin-left: 30px;
  }
`

export const SecondTitle = styled.h3`
  font: 700 3rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.primary};
  margin: 3px 0 3px 60px;

  @media (max-width: 768px) {
    margin-left: 30px;
  }
`

export const DescriptionContent = styled.p`
  max-width: 430px;
  font: 600 1.4rem Roboto, sans-serif;
  color: ${props => props.theme.colors.text};
  margin: 3px 0 3px 60px;

  span {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: 80vw;
    margin-left: 30px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

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

      .StudyingPNG {
        margin: 0 auto;
      }
      @media (max-width: 1545px) {
        .StudyingPNG {
          display: none;
        }
      }
    `}
`

export const FlexConsole = styled.div`
  display: flex;
  flex-direction: row;

  img {
    z-index: -1;
    position: absolute;
    margin-left: -355px;
    margin-top: -150px;
  }

  @media (max-width: 1545px) {
    img {
      display: none;
    }
  }
`

export const ConsoleContainer = styled.div`
  @media (max-width: 1545px) {
    margin-left: 40px;
  }
  @media (max-width: 768px) {
    margin-left: 15px;
  }
`
