import {
  BoxContainer,
  Container,
  ControlButtons,
  Green,
  Red,
  TitleBox,
  TitleBoxTitle,
  Yellow
} from './ConsoleBox'

interface ConsoleBoxType {
  Width: string
  Window: string
}

const ConsoleBox: React.FC<ConsoleBoxType> = props => {
  return (
    <>
      <Container Width={props.Width} Window={props.Window}>
        <TitleBox Width={props.Width}>
          <ControlButtons>
            <Red></Red>
            <Yellow></Yellow>
            <Green></Green>
          </ControlButtons>
          <TitleBoxTitle>portfolio : node — Konsole</TitleBoxTitle>
        </TitleBox>
        <BoxContainer Width={props.Width}>{props.children}</BoxContainer>
      </Container>
    </>
  )
}

export default ConsoleBox
