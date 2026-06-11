import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CircleNotch, LockSimple, User } from 'phosphor-react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import PageHead from '../components/PageHead'
import { authClient } from '../lib/auth-client'
import { cn } from '../lib/cn'
import { getSession } from '../lib/session'

type LoginFormTypes = {
  email: string
  password: string
}

export const Route = createFileRoute('/signin')({
  beforeLoad: async () => {
    const session = await getSession()

    if (session?.user) {
      throw redirect({ to: '/panel' })
    }
  },
  head: () => ({
    meta: [
      {
        title: 'Daniel Bernardes - Login'
      },
      {
        name: 'description',
        content:
          "Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. Login."
      }
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://www.danielbnd.com/signin'
      }
    ]
  }),
  component: SignIn
})

function SignIn() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const schema = yup
    .object({
      email: yup
        .string()
        .lowercase()
        .email('Please enter a valid email')
        .required('Please enter the email field'),
      password: yup.string().required('Please enter the password field')
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormTypes>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<LoginFormTypes> = async data => {
    setIsLoading(true)

    const response = await authClient.signIn.email({
      email: data.email,
      password: data.password
    })

    if (response.error) {
      setError('Invalid email or password')
    } else {
      setError('')
      await navigate({ to: '/panel' })
    }

    setIsLoading(false)
  }

  return (
    <PageHead
      title="Daniel Bernardes - Login"
      description="Hi, i'm Daniel Bernardes. I'm a Brazilian frontend developer. Login."
    >
      <div className="login-container">
        <div className="login-content">
          <div className="login-box">
            <header className="login-header">
              <User id="user-icon" size={40} color="#40DABF" />
              <span className="login-title">Sign In</span>
            </header>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                className={cn(
                  'login-input',
                  errors.email?.message && 'login-input--invalid'
                )}
                type="email"
                {...register('email', { required: true })}
                placeholder="Email"
              />
              <input
                className={cn(
                  'login-input',
                  errors.password?.message && 'login-input--invalid'
                )}
                type="password"
                {...register('password', { required: true })}
                placeholder="Password"
              />
              <span className="login-error">{error}</span>
              <button className="login-btn" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <CircleNotch id="circle-icon" size={24} weight="bold" />
                ) : (
                  <>
                    <LockSimple id="lock-icon" size={24} weight="bold" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageHead>
  )
}
