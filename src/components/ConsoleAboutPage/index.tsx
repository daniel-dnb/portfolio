import type { FC } from 'react'

const ConsoleAboutPage: FC = () => {
  return (
    <div className="console-about">
      Front-end
      <br />
      <div className="bar">
        <div className="Front-end" />
      </div>
      ReactJS
      <br />
      <div className="bar">
        <div className="ReactJS" />
      </div>
      TanStack Start
      <br />
      <div className="bar">
        <div className="NextJS" />
      </div>
      Back-end
      <br />
      <div className="bar last">
        <div className="Back-end" />
      </div>
    </div>
  )
}

export default ConsoleAboutPage
