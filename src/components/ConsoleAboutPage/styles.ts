import styled from 'styled-components'

export const Container = styled.div`
  font: 500 1.5rem Ubuntu, sans-serif;
  color: ${props => props.theme.colors.text};

  .bar {
    width: 37vw;
    height: 3px;
    background: #474747;
    margin-top: 0.8rem;
    margin-bottom: 3rem;

    .last {
      margin-bottom: 0;
    }

    .Front-end {
      width: 0;
      height: 3px;
      background: #40dabf;
      animation: FrontEndProgress 2s ease-in-out forwards;
    }
    .ReactJS {
      width: 0;
      height: 3px;
      background: #8686e3;
      animation: ReactJSProgress 2s 1s ease-in-out forwards;
    }
    .NextJS {
      width: 0;
      height: 3px;
      background: #40dabf;
      animation: NextJSProgress 3s 1s ease-in-out forwards;
    }
    .Back-end {
      width: 0;
      height: 3px;
      background: #e23e3e;
      animation: BackEndProgress 4s 1s ease-in-out forwards;
    }

    @media (max-width: 1545px) {
      width: 50vw;
    }
    @media (max-width: 950px) {
      width: 45vw;
    }
    @media (max-width: 768px) {
      width: 73vw;
    }

    @keyframes FrontEndProgress {
      from {
        opacity: 0.5;
        width: 0;
      }
      to {
        width: 85%;
      }
    }
    @keyframes ReactJSProgress {
      from {
        opacity: 0.5;
        width: 0;
      }
      to {
        opacity: 1;
        width: 75%;
      }
    }
    @keyframes NextJSProgress {
      from {
        opacity: 0.5;
        width: 0;
      }
      to {
        width: 64%;
      }
    }
    @keyframes BackEndProgress {
      from {
        opacity: 0.5;
        width: 0;
      }
      to {
        width: 45%;
      }
    }
  }
`
