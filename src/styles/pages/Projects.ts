import styled from 'styled-components'

export const Container = styled.div`
  padding-left: 1.55vw;
  padding-top: 5px;
  user-select: none;
`

export const Title = styled.h1`
  margin-left: 2.2vw;
  font: 700 5rem Ubuntu, sans-serif;
  color: ${({ theme }) => theme.colors.primary};
`
