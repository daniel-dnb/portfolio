import { createFileRoute } from '@tanstack/react-router'
import {
  ContactBackgroundText,
  Description,
  FormBox,
  Title
} from '../components/ContactBackgroundText/'
import ContactForm from '../components/ContactForm'
import ContactInformations from '../components/ContactInformations'
import PageBackground from '../components/PageBackground'
import PageHead from '../components/PageHead'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      {
        title: 'Daniel Bernardes - Contact'
      },
      {
        name: 'description',
        content:
          "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. Contact me."
      },
      {
        property: 'og:title',
        content: 'Daniel Bernardes - Contact'
      }
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://www.danielbnd.com/contact'
      }
    ]
  }),
  component: Contact
})

function Contact() {
  return (
    <PageHead
      title="Daniel Bernardes - Contact"
      description="Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. Contact me."
    >
      <PageBackground>
        <div className="page-container">
          <div className="page-grid page-grid--wide">
            <div className="page-grid-col">
              <ContactBackgroundText>
                <Title>
                  <h2 className="contact-title-content">Contact Me</h2>
                </Title>
                <Description>
                  <p className="contact-description-content">
                    If you have any job opportunities, do not hesitate and
                    contact me, I will be analyzing all proposals. <br />{' '}
                    However, if you have other request or question, don&apos;t
                    hesitate to use the form.
                  </p>
                </Description>
                <FormBox>
                  <div className="contact-form-content">
                    <ContactForm />
                  </div>
                </FormBox>
                <ContactInformations Side="left" />
              </ContactBackgroundText>
            </div>
            <div className="page-grid-col page-grid-col--right-contact">
              <ContactInformations Side="right" />
            </div>
          </div>
        </div>
      </PageBackground>
    </PageHead>
  )
}
