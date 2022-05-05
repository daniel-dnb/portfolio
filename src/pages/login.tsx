import { LockSimple, User } from 'phosphor-react'
import React from 'react'
import PageHead from '../components/PageHead'
import * as S from '../styles/pages/Login'

const Login: React.FC = () => {
  return (
    <PageHead title="Daniel Bernardes — Login" description="Login">
      <S.Container>
        <S.Content>
          <S.LoginBox>
            <S.LoginHeader>
              <User id="user-icon" size={32} color="#40DABF" />
              <S.LoginTitle>Sign In</S.LoginTitle>
            </S.LoginHeader>
            <S.Form>
              <S.Input type="email" name="email" placeholder="Email" />
              <S.Input type="password" name="password" placeholder="Password" />
              <S.Btn type="submit">
                <LockSimple id="lock-icon" size={24} weight="bold" />
                <span>Sign In</span>
              </S.Btn>
            </S.Form>
          </S.LoginBox>
        </S.Content>
      </S.Container>
    </PageHead>
  )
}

export default Login
