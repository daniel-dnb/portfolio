import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CircleNotch, LockSimple, User } from 'phosphor-react'

import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { signIn, getSession } from 'next-auth/react'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import PageHead from '../components/PageHead'
import * as S from '../styles/pages/Login'

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: '/panel'
      }
    }
  }

  return {
    redirect: {
      permanent: false,
      destination: '/'
    }
  }
}

type LoginFormTypes = {
  username: string
  password: string
}

const SignIn: NextPage = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const route = useRouter()

  const schema = yup
    .object({
      username: yup
        .string()
        .lowercase()
        .required('Please enter the username field')
        .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field'),
      password: yup.string().required('Please enter the password field')
    })
    .required()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<LoginFormTypes>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<LoginFormTypes> = async data => {
    setIsLoading(true)

    await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false
    })
      .then(res => {
        if (!res.ok) {
          setError('Invalid username or password')
        } else {
          setError('')
          route.push('/panel')
        }
      })
      .catch(err => console.log(err))

    setIsLoading(false)
  }

  return (
    <PageHead
      title="Daniel Bernardes — Login"
      description="Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. Login."
    >
      <S.Container>
        <S.Content>
          <S.LoginBox>
            <S.LoginHeader>
              <User id="user-icon" size={40} color="#40DABF" />
              <S.LoginTitle>Sign In</S.LoginTitle>
            </S.LoginHeader>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.Input
                type="text"
                {...register('username', { required: true })}
                placeholder="Username"
                invalidUser={errors.username?.message}
              />
              <S.Input
                type="password"
                {...register('password', { required: true })}
                placeholder="Password"
                invalidPassword={errors.password?.message}
              />
              <S.Error>{error}</S.Error>
              <S.Btn type="submit" disabled={isLoading}>
                {isLoading ? (
                  <CircleNotch id="circle-icon" size={24} weight="bold" />
                ) : (
                  <>
                    <LockSimple id="lock-icon" size={24} weight="bold" />
                    <span>Sign In</span>
                  </>
                )}
              </S.Btn>
            </S.Form>
          </S.LoginBox>
        </S.Content>
      </S.Container>
    </PageHead>
  )
}

export default SignIn
