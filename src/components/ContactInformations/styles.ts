import styled, { css } from 'styled-components'
import EmailSVG from '../../assets/Email.svg'
import LocationSVG from '../../assets/Location.svg'
import PhoneSVG from '../../assets/Phone.svg'

type PurpleCircleProps = {
  isThisLink?: boolean
}

type ContainerProps = {
  Side: string
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  ${props =>
    props.Side === 'left' &&
    css`
      display: none;
    `}

  @media (max-width: 1545px) {
    ${props =>
      props.Side === 'left' &&
      css`
        display: inherit;
        margin-top: 20px;
        padding-left: 3rem;
      `}
    ${props =>
      props.Side === 'right' &&
      css`
        display: none;
      `}
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
    font: 500 1.8rem Roboto, sans-serif;
    color: ${props => props.theme.colors.text};
  }
`

export const EmailBox = styled(LocationBox)`
  a {
    text-decoration: none;
    margin-left: 20px;
    font: 500 1.8rem Roboto, sans-serif;
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

export const ContactIMG = styled.div<ContainerProps>`
  z-index: -9;
  background-image: url('/ContactPNG.png');
  background-repeat: no-repeat;
  width: 390px;
  height: 390px;
  margin-top: -70px;
  margin-left: 25%;

  @media (max-width: 1545px) {
    ${props =>
      props.Side === 'left' &&
      css`
        margin-top: -70px;
        margin-left: -60px;
        transform: scale(0.8);
      `}
  }
`
