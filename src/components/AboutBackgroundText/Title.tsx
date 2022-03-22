import { NextPage } from 'next'
import { TextColor } from './styled'

const Title: NextPage = ({ children }) => {
  return (
    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor Color="white">{'<'}</TextColor>h2
      <TextColor Color="white">{'>'}</TextColor>
      {children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor Color="white">{'</'}</TextColor>h2
      <TextColor Color="white">{'>'}</TextColor>
      <br />
    </>
  )
}

export default Title
