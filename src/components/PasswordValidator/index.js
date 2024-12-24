import {useState} from 'react'

import {
  HomeContainer,
  ValidatorCard,
  Heading,
  Message,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onEnterPassword = event => {
    setPassword(event.target.value)
  }

  return (
    <HomeContainer>
      <ValidatorCard>
        <Heading>Password Validator</Heading>
        <Message>Check how strong and secure is your password</Message>
        <PasswordInput
          type="password"
          value={password}
          onChange={onEnterPassword}
        />
        <ErrorMsg>
          {password.length > 7
            ? ''
            : 'Your password must be at least 8 characters'}
        </ErrorMsg>
      </ValidatorCard>
    </HomeContainer>
  )
}

export default PasswordValidator
