import React from 'react'

import { Container, 
  Header, UserWrapper, 
  UserInfo, Photo, User, 
  UserGrettings, UserName, 
  Icon, 
  HighlightCards
} from './styles'
import { HighlightCard } from '../../components/HighlightCard';


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
          <Icon  name='power' /> 
        </UserWrapper>
      </Header>

      
      <HighlightCards horizontal 
        showsHorizontalScrollIndicator={false}
      >
        <HighlightCard 
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Ultima entrada dia 13 de Abril'
        />
        <HighlightCard 
          type='down'
          title='Saidas'
          amount='R$ 17.400,00'
          lastTransaction='Ultima entrada dia 13 de Abril'
        />
        <HighlightCard 
          type='total'
          title='Total'
          amount='R$ 17.400,00'
          lastTransaction='Ultima entrada dia 13 de Abril'
        />
      </HighlightCards>
      
      
    </Container>
  )
}