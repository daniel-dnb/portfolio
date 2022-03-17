import { NextPage } from 'next'
import { Container } from './styled'

const ConsoleAboutPage: NextPage = () => {
  return (
    <Container>
      Front-end
      <br />
      <div className="bar">
        <div className="Front-end"></div>
      </div>
      ReactJS
      <br />
      <div className="bar">
        <div className="ReactJS"></div>
      </div>
      NextJS
      <br />
      <div className="bar">
        <div className="NextJS"></div>
      </div>
      Back-end
      <br />
      <div className="bar last">
        <div className="Back-end"></div>
      </div>
    </Container>
  )
}

export default ConsoleAboutPage
