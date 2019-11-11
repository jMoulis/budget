import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import InputWithIcons from 'components/SignIn/InputWithIcons';
import { ReactComponent as MailIcon } from 'assets/icons/mail.svg';
import { ReactComponent as PasswordIcon } from 'assets/icons/password.svg';
import { Separator } from 'components/Separator';

interface Props {}

const Root = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;
const Subtitle = styled.h2`
  display: flex;
  justify-content: center;
  font-weight: 400;
  margin: 2rem;
`;
const Text = styled.span``;

interface ButtonType {
  alignSelf?: string;
}
const Button = styled.button<ButtonType>`
  background-color: #df4c6d;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  font-size: 2rem;
  color: white;
  height: 5rem;
  align-self: ${({ alignSelf }) => alignSelf};
  padding: 1rem 2rem;
  font-weight: 700;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
  }
`;

const Form: React.FC<Props> = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSigningIn) {
      console.log('Je me connecte');
      history.push('/');
    } else {
      console.log('Je créai mon compte');
      history.push('/');
    }
  };

  return (
    <Root onSubmit={handleSubmit}>
      <Subtitle>
        <Text>{isSigningIn ? 'Déjà utilisateur' : 'Je créai mon compte'}</Text>
      </Subtitle>
      <InputWithIcons icon={MailIcon} placeholder="Email" type="email" />
      <InputWithIcons
        icon={PasswordIcon}
        placeholder="Mot de passe"
        type="password"
      />
      <Button type="submit" alignSelf="flex-end">
        {isSigningIn ? 'Se connecter' : "S'enregistrer"}
      </Button>
      <Separator />
      <Subtitle>
        <Text>
          {isSigningIn ? 'Je créai mon compte' : 'Déjà utilisateur ?'}
        </Text>
      </Subtitle>
      <Button
        type="button"
        alignSelf="center"
        onClick={() => setIsSigningIn(prevState => !prevState)}
      >
        {isSigningIn ? "S'enregistrer" : 'Se connecter'}
      </Button>
    </Root>
  );
};

export default Form;
