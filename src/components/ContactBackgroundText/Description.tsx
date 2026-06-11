import type { FC, PropsWithChildren } from 'react'
import { TextColor } from '../../theme/backgroundText'

const Description: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor color="white">{'<'}</TextColor>p
      <TextColor color="white">{'>'}</TextColor>
      {children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor color="white">{'</'}</TextColor>p
      <TextColor color="white">{'>'}</TextColor>
      <br />
    </>
  )
}

export default Description
