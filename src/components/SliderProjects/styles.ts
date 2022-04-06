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
