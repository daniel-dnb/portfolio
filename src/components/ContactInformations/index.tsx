import React from 'react'
import {
  ContactIMG,
  Container,
  Email,
  EmailBox,
  Location,
  LocationBox,
  Phone,
  PhoneBox,
  PurpleCircle
} from './styles'

type ContactInformationsProps = {
  Side: string
}

const ContactInformations: React.FC<ContactInformationsProps> = props => {
  return (
    <Container Side={props.Side}>
      <LocationBox>
        <PurpleCircle>
          <Location />
        </PurpleCircle>
        <span>Rio de Janeiro, Brazil</span>
      </LocationBox>
      <EmailBox>
        <PurpleCircle isThisLink={true}>
          <Email />
        </PurpleCircle>
        <a href="mailto: daniielreis@live.com">daniielreis@live.com</a>
      </EmailBox>
      <ContactIMG Side={props.Side} />
    </Container>
  )
}

export default ContactInformations
