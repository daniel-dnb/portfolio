import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 3rem;
  padding-top: 5px;
  user-select: none;

  .code {
    .text {
      font: italic 700 1.4rem Consolas;
      color: ${props => props.theme.colors.pink};
      opacity: 0.4;
    }
    .white {
      color: ${props => props.theme.colors.text};
    }
    .blue {
      color: #4cbed6;
    }
    .purple {
      color: ${props => props.theme.colors.purple};
    }
    .yellow {
      color: #dade79;
    }

    .INSIDE {
      margin-left: 3.5rem;

      @media (max-width: 850px) {
        margin-left: 2rem;
      }

      .title {
        font: 700 8rem Ubuntu, sans-serif;
        letter-spacing: -0.03em;
        line-height: 172px;
        color: ${props => props.theme.colors.text};
        span {
          color: ${props => props.theme.colors.primary};
        }
        @media (max-width: 850px) {
          font-size: 5rem;
          line-height: normal;
        }
      }

      .subtitle {
        margin-left: 1rem;
        margin-top: 15px;
        font: 700 4rem Ubuntu, sans-serif;
        color: #989898;
        @media (max-width: 850px) {
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
        animation: neon 1.5s alternate infinite ease-in-out;
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
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .grid-container-right {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 850px) {
    display: inherit;
  }
`
