import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ValidatorCard = styled.div`
  background-color: #383a4e;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 11px;
  box-shadow: 0px 0 1px 1px #434451;
  width: 45%;

  @media (max-width: 577px) {
    width: 90%;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 39px;
  margin: 5px 0 5px 0;
  font-family: 'Roboto';

  @media (max-width: 577px) {
    font-size: 28px;
  }
`

export const Message = styled.p`
  color: #f8fafc;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 42px;
  text-align: center;
`

export const PasswordInput = styled.input`
  background-color: #edeeff;
  border-width: 0;
  width: 90%;
  height: 31px;
  outline: none;
  padding: 20px 9px;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
`
