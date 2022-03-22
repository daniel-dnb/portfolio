import { Form, Formik } from 'formik'
import { NextPage } from 'next'
import { useState } from 'react'
import * as yup from 'yup'
import { BottomBar, Btn, Input } from './styled'

const ContactForm: NextPage = () => {
  const [nameError, setNameError] = useState('bottom-bar')
  const [emailError, setEmailError] = useState('bottom-bar')
  const [subjectError, setSubjectError] = useState('bottom-bar')
  const [messageError, setMessageError] = useState('bottom-bar')

  const validationContact = yup.object().shape({
    name: yup.string().required('Empty field'),
    email: yup
      .string()
      .lowercase()
      .email('Invalid email')
      .required('Invalid email'),
    subject: yup.string().required('Empty field'),
    message: yup.string().required('Empty field')
  })

  const initialValues = {
    name: null,
    email: null,
    subject: null,
    message: null
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          alert([values.name, values.email, values.subject, values.message])
          window.location.reload()
        }}
        validationSchema={validationContact}
      >
        {({ errors, touched }) => (
          <Form>
            <BottomBar>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                maxLength={25}
                onClick={() => {
                  setNameError('bottom-bar name-active')
                }}
              />
              {touched.name ? (
                <div className="bottom-bar name-active" />
              ) : (
                <div className={nameError} />
              )}
              {errors.name && touched.name ? (
                <div className="bottom-bar name-red" />
              ) : null}
            </BottomBar>
            <BottomBar>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                maxLength={50}
                onClick={() => {
                  setEmailError('bottom-bar email-active')
                }}
              />
              {touched.email ? (
                <div className="bottom-bar email-active" />
              ) : (
                <div className={emailError} />
              )}
              {errors.email && touched.email ? (
                <div className="bottom-bar email-red" />
              ) : null}
            </BottomBar>
            <BottomBar>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                maxLength={50}
                onClick={() => {
                  setSubjectError('bottom-bar subject-active')
                }}
              />
              {touched.subject ? (
                <div className="bottom-bar subject-active" />
              ) : (
                <div className={subjectError} />
              )}
              {errors.subject && touched.subject ? (
                <div className="bottom-bar subject-red" />
              ) : null}
            </BottomBar>
            <BottomBar>
              <Input
                component="textarea"
                className="text-area"
                name="message"
                placeholder="Message"
                maxLength={500}
                onClick={() => {
                  setMessageError('bottom-bar message-active')
                }}
              />
              {touched.message ? (
                <div className="bottom-bar message-active" />
              ) : (
                <div className={messageError} />
              )}
              {errors.message && touched.message ? (
                <div className="bottom-bar message-red" />
              ) : null}
            </BottomBar>
            <Btn type="submit">Submit</Btn>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ContactForm
