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
        <a href="#">daniielreis@live.com</a>
      </EmailBox>
      <PhoneBox>
        <PurpleCircle>
          <Phone />
        </PurpleCircle>
        <span>+55 21 9 7669-4365</span>
      </PhoneBox>
      <ContactIMG Side={props.Side} />
    </Container>
  )
}

export default ContactInformations
