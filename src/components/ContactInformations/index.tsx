import type { FC } from 'react'
import EmailSVG from '../../assets/Email.svg'
import LocationSVG from '../../assets/Location.svg'
import { cn } from '../../lib/cn'

type ContactInformationsProps = {
  Side: string
}

const ContactInformations: FC<ContactInformationsProps> = props => {
  return (
    <div
      className={cn(
        'contact-info',
        props.Side === 'left' && 'contact-info--left',
        props.Side === 'right' && 'contact-info--right'
      )}
    >
      <div className="contact-location-box">
        <div className="contact-circle">
          <LocationSVG />
        </div>
        <span>Rio de Janeiro, Brazil</span>
      </div>
      <div className="contact-email-box">
        <div className="contact-circle contact-circle--link">
          <EmailSVG />
        </div>
        <a href="mailto: daniielreis@live.com">daniielreis@live.com</a>
      </div>
      <div
        className={cn(
          'contact-img',
          props.Side === 'left' && 'contact-img--left'
        )}
      />
    </div>
  )
}

export default ContactInformations
