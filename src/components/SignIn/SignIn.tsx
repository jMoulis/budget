import React from 'react';
import styled from '@emotion/styled';
import boyHappy from 'assets/images/boyHappy.png';
import girlHappy from 'assets/images/girlHappy.png';
import Form from 'components/SignIn/Form';

interface Props {}

const SignIn: React.FC<Props> = () => {
  const Root = styled.div`
    label: HomePage;
    grid-area: content;
    background-color: #67d36f;
    border-radius: 5rem;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-areas: 'header' 'content';
    grid-template-columns: 1fr;
    grid-template-rows: 10rem 1fr;
    position: relative;
  `;

  const Header = styled.div`
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
  `;

  const Content = styled.div`
    background-color: white;
    border-radius: 5rem;
    grid-area: content;
  `;

  const Avatar = styled.img`
    display: block;
    height: 15rem;
  `;

  const AvatarBoy = styled(Avatar)``;
  const AvatarGirl = styled(Avatar)``;
  const Title = styled.h1`
    font-size: 2.7rem;
    background-color: #52b3c8;
    border-top-right-radius: 5rem;
    border-top-left-radius: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9rem;
  `;
  const Text = styled.span`
    color: white;
    text-align: center;
  `;
  return (
    <Root>
      <Header>
        <AvatarBoy src={boyHappy} alt="boy" />
        <AvatarGirl src={girlHappy} alt="girl" />
      </Header>
      <Content>
        <Title>
          <Text>Gérer son budget avec joie</Text>
        </Title>
        <Form />
      </Content>
    </Root>
  );
};

export default SignIn;
