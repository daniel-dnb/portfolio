import type { FC, PropsWithChildren } from 'react'
import { cn } from '../lib/cn'

const textColorClassMap = {
  white: 'code-txt-white',
  blue: 'code-txt-blue',
  purple: 'code-txt-purple',
  yellow: 'code-txt-yellow'
} as const

type TextColorName = keyof typeof textColorClassMap

type TextColorProps = PropsWithChildren<{
  color: TextColorName
}>

export const BackgroundText: FC<PropsWithChildren> = ({ children }) => {
  return <div className="code-bg">{children}</div>
}

export const TextColor: FC<TextColorProps> = ({ color, children }) => {
  return <span className={cn(textColorClassMap[color])}>{children}</span>
}
