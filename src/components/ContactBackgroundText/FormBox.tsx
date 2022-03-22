import { NextPage } from 'next'
import { TextColor } from './styled'

const FormBox: NextPage = ({ children }) => {
  return (
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor Color="white">{'<'}</TextColor>form
      <TextColor Color="white">{'>'}</TextColor>
      {children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor Color="white">{'</'}</TextColor>form
      <TextColor Color="white">{'>'}</TextColor>
      <br />
    </div>
  )
}

export default FormBox
