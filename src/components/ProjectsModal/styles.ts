import styled from 'styled-components'
import GithubSVG from '../../assets/Github.svg'
import SiteIconSVG from '../../assets/SiteIcon.svg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: relative;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  .custom-img-indicator {
    position: relative;
    top: 15px;
  }

  .custom-img-indicator li {
    width: 50px;
    height: 60px;
    border-radius: 5px;
    filter: grayscale(100%);

    :hover {
      cursor: pointer;
      filter: brightness(0.5);
      transform: Scale(1.06);
      transition: all 0.15s ease-in;
      filter: grayscale(0%);
    }
  }
  .custom-img-indicator li.slick-active {
    transform: Scale(1.08);
    filter: grayscale(0%);
  }
`

export const SliderNavigatorImg = styled.img`
  width: 50px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
  object-position: 50% 0%;
`

export const ModalBox = styled.div`
  position: relative;
  overflow: auto;
  width: 50vw;
  height: 90vh;
  border-radius: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props.theme.colors.background};
  outline: 2px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 80vh;
  }
`

export const Title = styled.h2`
  font: 700 3.5rem Ubuntu, sans-serif;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

export const SliderBox = styled.div`
  display: flex;
  margin-top: 30px;
`

export const SliderImage = styled.img`
  width: 42vw;
  height: 42vh;
  object-fit: cover;
  object-position: 50% 0%;
  margin: 0 auto;
  outline: 1px solid ${props => props.theme.colors.primary};
  transition: all 0.2s ease-in-out;

  :hover,
  :active {
    cursor: pointer;
    animation: showFullSize 1.5s 0.2s ease-in-out forwards;
  }

  @keyframes showFullSize {
    0% {
      object-position: 50% 0;
    }
    100% {
      object-position: 50% 100%;
    }
  }

  @media (max-width: 768px) {
    width: 82vw;
    height: 30vh;
  }
`

export const FullSizeImage = styled.img``

export const DescriptionBox = styled.div`
  position: relative;
  width: 42vw;
  margin: 30px auto;
  font: 400 1.6rem Roboto, sans-serif;
  text-align: justify;

  h1 {
    font-size: 3rem;
  }

  h2 {
    margin-top: 30px;
    font-size: 3rem;
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    white-space: pre-wrap;
  }

  @media (max-width: 768px) {
    width: 82vw;
    font-size: 1.8rem;

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 4rem;
    }
  }
`

export const TechnologieBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const TechnologieImg = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;

  img {
    max-width: 50px;
    max-height: 50px;
  }
`

export const TechnologieName = styled.p`
  margin-left: 15px;
  font: 500 1.6rem Roboto, sans-serif;
  color: ${({ theme }) => theme.colors.primary};
`

export const LinkBox = styled.div`
  margin-top: 20px;

  .link-box-title {
    display: flex;
    align-items: center;

    h4 {
      font-size: 1.8rem;
      margin-left: 10px;
    }

    @media (max-width: 768px) {
      h4 {
        font-size: 2.5rem;
      }
    }
  }

  .link-box-links {
    display: flex;
    align-items: center;
    margin-top: 5px;
    a {
      margin-left: 33px;
      text-decoration: none;
      font: 400 1.6rem Roboto, sans-serif;
      color: ${({ theme }) => theme.colors.primary};
      :hover {
        text-decoration: underline;
      }
    }
    span {
      margin-left: 3px;
      font-size: 1.4rem;
      filter: brightness(0.7);
    }
  }
`

export const Github = styled(GithubSVG)`
  transform: Scale(0.9);
`

export const SiteIcon = styled(SiteIconSVG)`
  transform: Scale(0.9);
`

export const CloseButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 35px;
  margin: 0 auto;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 12px;
  background: ${props => props.theme.colors.background};
  font: 700 1.6rem Roboto, sans-serif;
  color: ${props => props.theme.colors.primary};
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both,
    neon 1.5s alternate infinite ease-in-out;

  &:hover {
    cursor: pointer;
    animation-play-state: paused;
  }

  @keyframes neon {
    from {
      filter: drop-shadow(0 0 2px ${props => props.theme.colors.primary});
    }
    to {
      filter: drop-shadow(0 0 5px ${props => props.theme.colors.primary});
    }
  }
`
