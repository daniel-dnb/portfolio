import type { FC, PropsWithChildren } from 'react'
import { TextColor } from '../../theme/backgroundText'

const FormBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor color="white">{'<'}</TextColor>form
      <TextColor color="white">{'>'}</TextColor>
      {children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor color="white">{'</'}</TextColor>form
      <TextColor color="white">{'>'}</TextColor>
      <br />
    </div>
  )
}

export default FormBox
