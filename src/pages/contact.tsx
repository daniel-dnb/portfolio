import { GetStaticProps, NextPage } from 'next'
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
import {
  Container,
  DescriptionContent,
  FormContent,
  Grid,
  GridContainer,
  TitleContent
} from '../styles/pages/Contact'

const Contact: NextPage = () => {
  return (
    <PageHead title="Daniel Bernardes — Contact" description="Contact me">
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
    </PageHead>
  )
}

export default Contact

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {}
  }
}
