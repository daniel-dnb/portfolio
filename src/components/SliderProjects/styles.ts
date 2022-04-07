import styled from 'styled-components'

export const Container = styled.div`
  margin: -15px 0 30px -3rem;

  .custom-indicator {
    position: relative;
  }

  .custom-indicator li {
    width: 5rem;
    height: 0.4rem;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.text};
    :hover {
      cursor: pointer;
      filter: brightness(0.5);
      transition: all 0.15s ease-in;
    }
  }
  .custom-indicator li.slick-active {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
  }
`

export const SliderBox = styled.div`
  display: flex;
  margin-top: 40px;
`

interface CoverIMGProps {
  bgIMG: string
}

export const CoverIMG = styled.div<CoverIMGProps>`
  margin: 0 auto;
  width: 17.7vw;
  height: 21.5vh;
  background: ${props => props.bgIMG};
  background-size: cover;
  background-repeat: no-repeat;
  outline: 1px solid ${props => props.theme.colors.primary};

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    left: 0;
    width: 44vw;
    height: 24vh;
  }

  @media (max-width: 480px) {
    width: 85vw;
    height: 24vh;
  }
`
export const TitleIMG = styled.h2`
  max-width: 210px;
  max-height: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  text-align: center;
  font: 500 2rem Ubuntu, sans-serif;
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    cursor: pointer;
  }
`

export const Circle = styled.div`
  position: absolute;
  width: 100%;
  top: -5px;
  opacity: 0;
`

export const LoadingContainer = styled.div`
  width: 100%;
  height: 45vh;
  margin-left: -29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const Loading = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid #1d1d1d;
  border-radius: 50%;
  border-top-color: ${props => props.theme.colors.primary};
  animation: rotating 2s infinite;

  @keyframes rotating {
    to {
      transform: rotate(1turn);
    }
  }
`

export const LoadingText = styled.div`
  margin-top: 20px;
  font: 700 3rem Roboto, sans-serif;
  color: ${props => props.theme.colors.primary};
`

export const Animation = styled.span`
  position: relative;
  width: max-content;
  margin-left: 1px;

  :before,
  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  :before {
    background: ${props => props.theme.colors.background2};
    animation: typewriter 1.5s steps(4) infinite;
  }

  @keyframes typewriter {
    to {
      left: 130%;
    }
  }
`

export const ErrorContainer = styled(LoadingContainer)`
  @media (max-width: 450px) {
    img {
      transform: scale(0.8);
    }
  }
`

export const ErrorText = styled.p`
  max-width: 586px;
  font: 500 3rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.text};
  text-align: center;
`
