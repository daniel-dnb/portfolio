import { NextPage } from 'next'
import { ConsoleText, ConsoleTextColor } from './style'

const ConsoleHomePage: NextPage = () => {
  return (
    <ConsoleText>
      <ConsoleTextColor Color="yellow">danielbnd</ConsoleTextColor> in{' '}
      <ConsoleTextColor Color="purple">www/</ConsoleTextColor> <br />
      <ConsoleTextColor Color="red" Font={true}>
        {'> '}
      </ConsoleTextColor>
      <ConsoleTextColor Color="green">yarn</ConsoleTextColor>{' '}
      <ConsoleTextColor Color="yellow">create</ConsoleTextColor> next-app
      portfolio <br />
      <br />
      <ConsoleTextColor Color="yellow">danielbnd</ConsoleTextColor> in{' '}
      <ConsoleTextColor Color="purple">www/</ConsoleTextColor> <br />
      <ConsoleTextColor Color="green">
        {' '}
        <ConsoleTextColor Color="green" Font={true}>
          {'> '}
        </ConsoleTextColor>
        cd{' '}
      </ConsoleTextColor>
      <ConsoleTextColor Color="pink">portfolio</ConsoleTextColor> <br />
      <br />
      <ConsoleTextColor Color="yellow">danielbnd</ConsoleTextColor> in{' '}
      <ConsoleTextColor Color="purple">www/portfolio/</ConsoleTextColor> <br />
      <ConsoleTextColor Color="green">
        <ConsoleTextColor Color="green" Font={true}>
          {'> '}
        </ConsoleTextColor>
        code{' '}
      </ConsoleTextColor>
      <ConsoleTextColor Color="pink">{'.'}</ConsoleTextColor> <br />
      <br />
      <ConsoleTextColor Color="yellow">danielbnd</ConsoleTextColor> in{' '}
      <ConsoleTextColor Color="purple">www/portfolio/</ConsoleTextColor> <br />
      <ConsoleTextColor Color="green">
        <ConsoleTextColor Color="green" Font={true}>
          {'> '}
        </ConsoleTextColor>
        yarn{' '}
      </ConsoleTextColor>
      <ConsoleTextColor Color="yellow">dev</ConsoleTextColor> <br />
      <ConsoleTextColor Color="white">yarn run v1.22.5</ConsoleTextColor> <br />
      <ConsoleTextColor Color="grey">$ next dev</ConsoleTextColor>
      <br />
      <ConsoleTextColor Color="green">ready</ConsoleTextColor> - started server
      on http://localhost:3000
    </ConsoleText>
  )
}

export default ConsoleHomePage
