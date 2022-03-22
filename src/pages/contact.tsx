import Head from 'next/head'
import {
  ContactBackgroundText,
  Description,
  FormBox,
  Title
} from '../components/ContactBackgroundText/'
import ContactForm from '../components/ContactForm'
import PageBackground from '../components/PageBackground'
import {
  ContactIMG,
  Container,
  DescriptionContent,
  Email,
  EmailBox,
  FormContent,
  Grid,
  GridContainer,
  Location,
  LocationBox,
  Phone,
  PhoneBox,
  PurpleCircle,
  TitleContent
} from '../styles/pages/Contact'

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Daniel Bernardes — Contact</title>
      </Head>

      <PageBackground>
        <Container>
          <Grid>
            <GridContainer Side="left">
              <ContactBackgroundText>
                <Title>
                  <TitleContent>Contact Me</TitleContent>
                </Title>
                <Description>
                  <DescriptionContent>
                    If you have any job opportunities, do not hesitate and
                    contact me, I will be analyzing all proposals. <br />{' '}
                    However, if you have other request or question, don’t
                    hesitate to use the form.
                  </DescriptionContent>
                </Description>
                <FormBox>
                  <FormContent>
                    <ContactForm />
                  </FormContent>
                </FormBox>
              </ContactBackgroundText>
            </GridContainer>
            <GridContainer Side="right">
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
              <ContactIMG />
            </GridContainer>
          </Grid>
        </Container>
      </PageBackground>
    </>
  )
}

export default Contact
