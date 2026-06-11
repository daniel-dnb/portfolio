import type { FC, PropsWithChildren } from 'react'
import { BackgroundText, TextColor } from '../../theme/backgroundText'

const ContactBackgroundText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <BackgroundText>
        import
        <TextColor color="white">{' React'}</TextColor> from{' '}
        <TextColor color="yellow">{"'react'"}</TextColor>
        <br />
        <br />
        const
        <TextColor color="blue"> Contact</TextColor>:{' '}
        <TextColor color="purple">React.FC</TextColor> ={' '}
        <TextColor color="yellow">{'()'}</TextColor> {'=>'}{' '}
        <TextColor color="yellow">{'{'}</TextColor>
        <br />
        &nbsp;&nbsp;{'return ('}
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TextColor color="white">{'<'}</TextColor>div
        <TextColor color="white">{'>'}</TextColor>
        <br />
        {children}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TextColor color="white">{'</'}</TextColor>div
        <TextColor color="white">{'>'}</TextColor>
        <br />
        &nbsp;&nbsp;{')'}
        <br />
        <TextColor color="yellow">{'}'}</TextColor>
        <br />
        <br />
        export default
        <TextColor color="blue"> Contact</TextColor>
      </BackgroundText>
    </>
  )
}

export default ContactBackgroundText
