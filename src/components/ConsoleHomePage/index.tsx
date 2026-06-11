import type { FC, PropsWithChildren } from 'react'
import { cn } from '../../lib/cn'

const consoleColorMap = {
  green: 'console-color-green',
  pink: 'console-color-pink',
  purple: 'console-color-purple',
  yellow: 'console-color-yellow',
  red: 'console-color-red',
  grey: 'console-color-grey',
  white: 'console-color-white'
} as const

type ConsoleColor = keyof typeof consoleColorMap

function ConsoleTextColor({
  color,
  font,
  children
}: PropsWithChildren<{ color: ConsoleColor; font?: boolean }>) {
  return (
    <span className={cn(consoleColorMap[color], font && 'console-font-nanum')}>
      {children}
    </span>
  )
}

function Typewriter({
  anim,
  children
}: PropsWithChildren<{ anim: 1 | 2 | 3 | 4 }>) {
  return (
    <span className={cn('console-typewriter', `console-anim-${anim}`)}>
      {children}
    </span>
  )
}

function Static({ step, children }: PropsWithChildren<{ step: 1 | 2 | 3 | 4 | 5 | 6 }>) {
  return <span className={`console-static-${step}`}>{children}</span>
}

const ConsoleHomePage: FC = () => {
  return (
    <div className="console-text">
      <ConsoleTextColor color="yellow">danielbnd</ConsoleTextColor> in{' '}
      <ConsoleTextColor color="purple">www/</ConsoleTextColor> <br />
      <ConsoleTextColor color="red" font>
        {'> '}
      </ConsoleTextColor>
      <Typewriter anim={1}>
        <ConsoleTextColor color="green">yarn</ConsoleTextColor>{' '}
        <ConsoleTextColor color="yellow">create</ConsoleTextColor> next-app
        portfolio{' '}
      </Typewriter>
      <Static step={1}>
        <br />
        <br />
        <ConsoleTextColor color="yellow">danielbnd</ConsoleTextColor> in{' '}
        <ConsoleTextColor color="purple">www/</ConsoleTextColor>
        <br />
        <ConsoleTextColor color="green" font>
          {'> '}
        </ConsoleTextColor>
      </Static>
      <Typewriter anim={2}>
        <span className="console-color-green"> cd </span>
        <ConsoleTextColor color="pink">portfolio</ConsoleTextColor>
      </Typewriter>
      <br />
      <br />
      <Static step={2}>
        <ConsoleTextColor color="yellow">danielbnd</ConsoleTextColor> in{' '}
        <ConsoleTextColor color="purple">www/portfolio/</ConsoleTextColor>{' '}
        <br />
        <ConsoleTextColor color="green" font>
          {'> '}
        </ConsoleTextColor>
      </Static>
      <Typewriter anim={3}>
        <span className="console-color-green">code </span>
        <ConsoleTextColor color="pink">.</ConsoleTextColor>{' '}
      </Typewriter>
      <br />
      <br />
      <Static step={3}>
        <ConsoleTextColor color="yellow">danielbnd</ConsoleTextColor> in{' '}
        <ConsoleTextColor color="purple">www/portfolio/</ConsoleTextColor>
        <br />
        <ConsoleTextColor color="green" font>
          {'> '}
        </ConsoleTextColor>
      </Static>
      <Typewriter anim={4}>
        <span className="console-color-green">pnpm</span>{' '}
        <ConsoleTextColor color="yellow">dev</ConsoleTextColor>
      </Typewriter>{' '}
      <br />
      <Static step={4}>
        <ConsoleTextColor color="white">pnpm 10.23.0</ConsoleTextColor>
      </Static>{' '}
      <br />
      <Static step={5}>
        <ConsoleTextColor color="grey">$ vite dev</ConsoleTextColor>
      </Static>
      <br />
      <Static step={6}>
        <ConsoleTextColor color="green">ready</ConsoleTextColor> - started
        server on <span className="link">http://localhost:3000</span>
      </Static>
    </div>
  )
}

export default ConsoleHomePage
