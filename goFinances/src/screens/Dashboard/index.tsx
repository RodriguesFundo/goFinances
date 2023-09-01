import React from 'react'
import { View } from 'react-native';

import { Container, Header, UserWrapper, UserInfo, Photo, User, UserGrettings, UserName, Icon } from './styles'


export  function Dashboard() {
  return ( 
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/105431834?v=4'}} />
            <User>
              <UserGrettings>Olá, </UserGrettings>
              <UserName>Rodrigues</UserName>
            </User>
          </UserInfo>
          <Icon name='power' /> 
        </UserWrapper>
      </Header>
    </Container>
  )
}