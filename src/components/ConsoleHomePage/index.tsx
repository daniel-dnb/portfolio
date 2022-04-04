import { NextPage } from 'next'
import {
  Animation1,
  Animation2,
  Animation3,
  Animation4,
  ConsoleText,
  ConsoleTextColor,
  Static1,
  Static2,
  Static3,
  Static4,
  Static5,
  Static6
} from './styles'

const ConsoleHomePage: NextPage = () => {
  return (
    <ConsoleText>
      <ConsoleTextColor Color="yellow">danielbnd</ConsoleTextColor> in{' '}
      <ConsoleTextColor Color="purple">www/</ConsoleTextColor> <br />
      <ConsoleTextColor Color="red" Font={true}>
        {'> '}
      </ConsoleTextColor>
      <Animation1>
        <ConsoleTextColor Color="green">yarn</ConsoleTextColor>{' '}
        <ConsoleTextColor Color="yellow">create</ConsoleTextColor> next-app
        portfolio{' '}
      </Animation1>
      <Static1>
        <br />
        <br />
        <ConsoleTextColor Color="yellow">danielbnd</ConsoleTextColor> in{' '}
        <ConsoleTextColor Color="purple">www/</ConsoleTextColor>
        <br />
        <ConsoleTextColor Color="green" Font={true}>
          {'> '}
        </ConsoleTextColor>
      </Static1>
      <Animation2>
        <span className="green"> cd </span>
        <ConsoleTextColor Color="pink">portfolio</ConsoleTextColor>
      </Animation2>
      <br />
      <br />
      <Static2>
        <ConsoleTextColor Color="yellow">danielbnd</ConsoleTextColor> in{' '}
        <ConsoleTextColor Color="purple">www/portfolio/</ConsoleTextColor>{' '}
        <br />
        <ConsoleTextColor Color="green" Font={true}>
          {'> '}
        </ConsoleTextColor>
      </Static2>
      <Animation3>
        <span className="green">code </span>
        <ConsoleTextColor Color="pink">{'.'}</ConsoleTextColor>{' '}
      </Animation3>
      <br />
      <br />
      <Static3>
        <ConsoleTextColor Color="yellow">danielbnd</ConsoleTextColor> in{' '}
        <ConsoleTextColor Color="purple">www/portfolio/</ConsoleTextColor>
        <br />
        <ConsoleTextColor Color="green" Font={true}>
          {'> '}
        </ConsoleTextColor>
      </Static3>
      <Animation4>
        <span className="green">yarn</span>{' '}
        <ConsoleTextColor Color="yellow">dev</ConsoleTextColor>
      </Animation4>{' '}
      <br />
      <Static4>
        <ConsoleTextColor Color="white">yarn run v1.22.5</ConsoleTextColor>
      </Static4>{' '}
      <br />
      <Static5>
        <ConsoleTextColor Color="grey">$ next dev</ConsoleTextColor>
      </Static5>
      <br />
      <Static6>
        <ConsoleTextColor Color="green">ready</ConsoleTextColor> - started
        server on <span className="link">http://localhost:3000</span>
      </Static6>
    </ConsoleText>
  )
}

export default ConsoleHomePage
