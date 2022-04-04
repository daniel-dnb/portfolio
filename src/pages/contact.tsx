import Head from 'next/head'
import {
  ContactBackgroundText,
  Description,
  FormBox,
  Title
} from '../components/ContactBackgroundText/'
import ContactForm from '../components/ContactForm'
import ContactInformations from '../components/ContactInformations'
import PageBackground from '../components/PageBackground'
import {
  Container,
  DescriptionContent,
  FormContent,
  Grid,
  GridContainer,
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
                <ContactInformations Side="left" />
              </ContactBackgroundText>
            </GridContainer>
            <GridContainer Side="right">
              <ContactInformations Side="right" />
            </GridContainer>
          </Grid>
        </Container>
      </PageBackground>
    </>
  )
}

export default Contact
