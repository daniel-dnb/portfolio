import { NextPage } from 'next'
import { TextColor } from './styled'

const Description: NextPage = ({ children }) => {
  return (
    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor Color="white">{'<'}</TextColor>p
      <TextColor Color="white">{'>'}</TextColor>
      {children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor Color="white">{'</'}</TextColor>p
      <TextColor Color="white">{'>'}</TextColor>
      <br />
    </>
  )
}

export default Description
