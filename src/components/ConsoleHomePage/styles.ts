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

export const Animation1 = styled.span`
  position: relative;
  width: max-content;

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
    animation: typewriter 1s steps(30) 1s forwards;
  }

  :after {
    width: 0.5rem;
    background: ${props => props.theme.colors.background2};
    animation: typewriter 1s steps(30) 1s forwards,
      blink 750ms steps(30) infinite, stopBlink 2.2s steps(1) forwards;
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    from {
      background: ${props => props.theme.colors.primary};
    }
    to {
      background: transparent;
    }
  }

  @keyframes stopBlink {
    to {
      background: ${props => props.theme.colors.background2};
    }
  }
`

export const Static1 = styled.span`
  opacity: 0;
  animation: delay 2.3s steps(1) forwards;

  @keyframes delay {
    to {
      opacity: 1;
    }
  }
`

export const Animation2 = styled(Animation1)`
  .green {
    color: #64d792;
  }
  :before {
    animation: typewriter 0.8s steps(12) 2.5s forwards;
  }

  :after {
    animation: typewriter 0.8s steps(12) 2.5s forwards,
      blink 750ms steps(12) 2.5s infinite, stopBlink 3.7s steps(1) forwards;
  }
`

export const Static2 = styled(Static1)`
  animation: delay 3.6s steps(1) forwards;
`

export const Animation3 = styled(Animation2)`
  :before {
    animation: typewriter 0.5s steps(6) 3.8s forwards;
  }

  :after {
    animation: typewriter 0.5s steps(6) 3.8s forwards,
      blink 750ms steps(12) 3.8s infinite, stopBlink 4.5s steps(1) forwards;
  }
`

export const Static3 = styled(Static1)`
  animation: delay 4.6s steps(1) forwards;
`

export const Animation4 = styled(Animation2)`
  :before {
    animation: typewriter 0.8s steps(8) 4.8s forwards;
  }

  :after {
    animation: typewriter 0.8s steps(8) 4.8s forwards,
      blink 750ms steps(12) 4.8s infinite, stopBlink 6.5s steps(1) forwards;
  }
`

export const Static4 = styled(Static1)`
  animation: delay 6.6s steps(1) forwards;
`

export const Static5 = styled(Static1)`
  animation: delay 6.9s steps(1) forwards;
`

export const Static6 = styled(Static1)`
  animation: delay 7.2s steps(1) forwards;
  .link {
    text-decoration: underline;
  }
`
