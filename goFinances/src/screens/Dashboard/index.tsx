import React from 'react'
import { Feather} from '@expo/vector-icons';
import { View } from 'react-native';

import { Container, Header, UserWrapper, UserInfo, Photo, User, UserGrettings, UserName } from './styles'


export  function Dashboard() {
  return ( 
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo />
            <User>
              <UserGrettings>Olá, </UserGrettings>
              <UserName>Rodrigues</UserName>
            </User>
            <Feather name='power' /> 
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  )
}