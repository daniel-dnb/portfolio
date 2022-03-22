import styled, { css } from 'styled-components'
import EmailSVG from '../../assets/Email.svg'
import LocationSVG from '../../assets/Location.svg'
import PhoneSVG from '../../assets/Phone.svg'

interface GridContainerProps {
  Side: string
}

interface PurpleCircleProps {
  isThisLink?: boolean
}

export const Container = styled.div`
  padding-left: 3rem;
  padding-top: 5px;
  user-select: none;
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
      margin: auto 0;
      @media (max-width: 1545px) {
        display: none;
      }
    `}
`

export const TitleContent = styled.h2`
  margin: 0.5rem 6rem;
  font: 700 5rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.primary};
`

export const DescriptionContent = styled.p`
  margin: 0.5rem 6rem;
  width: 37vw;
  font: 600 1.6rem Roboto, sans-serif;
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    width: 80vw;
  }
`

export const FormContent = styled.div`
  margin: 0.5rem 6rem;
  width: 36.46vw;
  display: grid;

  @media (max-width: 768px) {
    width: 80vw;
  }
`

export const PurpleCircle = styled.div<PurpleCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  border-radius: 50px;

  ${props =>
    props.isThisLink === true &&
    css`
      :hover {
        cursor: pointer;
        transform: scale(1.009);
        animation: activeEmailAnimation 0.5s ease-in-out infinite;
      }
      :active {
        animation-play-state: paused;
        transform: scale(1.02);
        filter: brightness(0.9);
      }
    `}

  @keyframes activeEmailAnimation {
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

export const LocationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  span {
    margin-left: 20px;
    font: 500 1.8rem Ubuntu, sans-serif;
    color: ${props => props.theme.colors.text};
  }
`
export const EmailBox = styled(LocationBox)`
  a {
    text-decoration: none;
    margin-left: 20px;
    font: 500 1.8rem Ubuntu, sans-serif;
    color: ${props => props.theme.colors.text};

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
export const PhoneBox = styled(LocationBox)`
  margin-bottom: 0;
`

export const Email = styled(EmailSVG)``
export const Location = styled(LocationSVG)``
export const Phone = styled(PhoneSVG)``

export const ContactIMG = styled.div`
  z-index: -9;
  background-image: url('/ContactPNG.png');
  background-repeat: no-repeat;
  width: 390px;
  height: 390px;
  margin-top: -70px;
  margin-left: 25%;
`

export const SmallInfo = styled.div``
