import { NextPage } from 'next'
import { TextColor } from './styles'

const Subtitle: NextPage = ({ children }) => {
  return (
    <>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor Color="white">{'<'}</TextColor>h3
      <TextColor Color="white">{'>'}</TextColor>
      {children}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextColor Color="white">{'</'}</TextColor>h3
      <TextColor Color="white">{'>'}</TextColor>
      <br />
    </>
  )
}

export default Subtitle
