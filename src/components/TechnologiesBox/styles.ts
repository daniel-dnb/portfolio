import styled, { css } from 'styled-components'
import JavascriptSVG from '../../assets/Javascript.svg'
import MongoDBSVG from '../../assets/MongoDB.svg'
import MySQLSVG from '../../assets/MySQL.svg'
import NextJSSVG from '../../assets/NextJS.svg'
import ReactJSSVG from '../../assets/ReactJS.svg'
import ReduxSVG from '../../assets/Redux.svg'
import TypescriptSVG from '../../assets/Typescript.svg'

interface ContainerProps {
  side: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props =>
    props.side === 'right' &&
    css`
      @media (max-width: 1545px) {
        display: none;
      }
    `}
  ${props =>
    props.side === 'left' &&
    css`
      @media (min-width: 1545px) {
        display: none;
      }
      @media (max-width: 768px) {
        margin: 0 auto;
        max-width: 82vw;
      }
    `}
`
export const TechnologiesTitle = styled.div`
  font: 700 3rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 40px;

  @media (max-width: 900px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

interface TechnologiesImgBoxProps {
  position: string
}

export const TechnologiesImgBox = styled.div<TechnologiesImgBoxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${props =>
    props.position === 'bottom' &&
    css`
      margin-top: 60px;

      @media (max-width: 900px) {
        margin-top: 4vh;
      }
    `}
`

export const ImgBox = styled.div`
  position: relative;
  display: flex;
  max-width: 60px;
  max-height: 60px;
  margin: 0px 1.5vw;

  .span-box {
    opacity: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: -36px;
    left: -15px;
    width: calc(100% + 30px);
    height: 20px;
    border-radius: 7px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scale(0.85);
    transition: all 0.3s ease-in-out;
  }
  .text-box {
    font: 600 1.5rem Roboto, sans-serif;
    text-align: center;
    color: #000;
  }
  .arrow-down {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    .span-box {
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    transform: scale(0.7);
    margin: 0 0.7vw;

    .text-box {
      font-size: 2.5rem;
    }
  }
`

export const Javascript = styled(JavascriptSVG)`
  transform: scale(1.1);
  path {
    filter: grayscale(1);
  }
  &:hover {
    transform: scale(1.15);
    path {
      filter: grayscale(0);
    }
  }
`
export const Typescript = styled(TypescriptSVG)`
  transform: scale(1.1);
  path {
    filter: grayscale(1);
  }
  &:hover {
    transform: scale(1.15);
    path {
      filter: grayscale(0);
    }
  }
`
export const ReactJS = styled(ReactJSSVG)`
  margin-top: 6.2px;
  transform: scale(1.1);
  path {
    filter: grayscale(1);
  }
  &:hover {
    transform: scale(1.15);
    path {
      filter: grayscale(0);
    }
  }
`
export const NextJS = styled(NextJSSVG)`
  transform: scale(1.1);
  path {
    filter: grayscale(1);
  }
  &:hover {
    transform: scale(1.15);
    path {
      filter: grayscale(0);
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`
export const MySQL = styled(MySQLSVG)`
  transform: scale(1.1);
  path {
    filter: grayscale(1);
  }
  &:hover {
    transform: scale(1.15);
    path {
      filter: grayscale(0);
    }
  }
`
export const MongoDB = styled(MongoDBSVG)`
  transform: scale(1.1);
  path {
    filter: grayscale(1);
  }
  &:hover {
    transform: scale(1.15);
    path {
      filter: grayscale(0);
    }
  }
`
export const Redux = styled(ReduxSVG)`
  transform: scale(1.1);
  path {
    filter: grayscale(1);
  }
  &:hover {
    transform: scale(1.15);
    path {
      filter: grayscale(0);
    }
  }
`
