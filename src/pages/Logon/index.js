import React, { useState } from 'react';
//Components
import InputLogon from '../../components/InputLogon'
import Button from '../../components/Button';
//Icons 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
//Styles
import { 
  Container, 
  ContainerLogin
} from './styles';

const Logon = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let currentErrors = [];

    if (!email || !password) {
      if (!email) {
        currentErrors.email = 'Email obrigatório';
      } 
      if (!password) {
        currentErrors.password = 'Senha obrigatória';
      }
    } else{
      history('/map');
    }
    setErrors(currentErrors);
  }

  return (
    <Container>
      <ContainerLogin onSubmit={handleSubmit} > 
        <h2>Login</h2>
        <InputLogon
          placeholder='E-mail'
          type='email'
          icon={faEnvelope}
          value={email}
          onChange={(event) => {
          setEmail(event.target.value)}}
          errorMessage={errors.email}
        />
        <InputLogon
          placeholder='Senha'
          type='password'
          icon={faLock}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
            console.log(event.target.value)}}
          errorMessage={errors.password}
        />
        <Button type='submit' style='btn-round-blue'>Sign in</Button>
      </ContainerLogin>
    </Container>
  )
}

export default Logon;