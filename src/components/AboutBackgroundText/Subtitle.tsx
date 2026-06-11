import type { FC, PropsWithChildren } from 'react'
import { TextColor } from '../../theme/backgroundText'

const Subtitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor color="white">{'<'}</TextColor>h3
      <TextColor color="white">{'>'}</TextColor>
      {children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor color="white">{'</'}</TextColor>h3
      <TextColor color="white">{'>'}</TextColor>
      <br />
    </>
  )
}

export default Subtitle
