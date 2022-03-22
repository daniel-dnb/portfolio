import {
  BoxContainer,
  Container,
  ControlButtons,
  Green,
  Red,
  TitleBox,
  TitleBoxTitle,
  Yellow
} from './styled'

interface ConsoleBoxType {
  width?: string
  window: string
  title: string
  height: string
  margintop?: string
}

const ConsoleBox: React.FC<ConsoleBoxType> = props => {
  return (
    <>
      <Container
        width={props.width}
        window={props.window}
        margintop={props.margintop}
      >
        <TitleBox width={props.width}>
          <ControlButtons>
            <Red></Red>
            <Yellow></Yellow>
            <Green></Green>
          </ControlButtons>
          <TitleBoxTitle>{props.title} : node — Konsole</TitleBoxTitle>
        </TitleBox>
        <BoxContainer width={props.width} height={props.height}>
          {props.children}
        </BoxContainer>
      </Container>
    </>
  )
}

export default ConsoleBox
