import type { FC, PropsWithChildren } from 'react'
import { TextColor } from '../../theme/backgroundText'

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor color="white">{'<'}</TextColor>h2
      <TextColor color="white">{'>'}</TextColor>
      {children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor color="white">{'</'}</TextColor>h2
      <TextColor color="white">{'>'}</TextColor>
      <br />
    </>
  )
}

export default Title
